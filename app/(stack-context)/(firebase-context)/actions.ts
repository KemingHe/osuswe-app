'use server';

import type { DocumentData, DocumentSnapshot } from 'firebase-admin/firestore';

import {
  fbAdminAuth,
  fbAdminStore,
} from '@/lib/firebase/admin/firebaseAdminApp';
import {
  FIRESTORE_ADMIN_DOCUMENT_ID,
  FIRESTORE_ADMIN_EMAIL_ARRAY_FIELDNAME,
  FIRESTORE_CONFIG_COLLECTION_ID,
} from '@/lib/firebase/admin/firestoreAdminConstants';
import { USER_ROLE_ENUM } from '@/schemas/UserRoleSchema';

export async function getInteralSignInToken(
  userOSUEmail: string,
): Promise<string> {
  const customToken: string = await fbAdminAuth.createCustomToken(userOSUEmail);
  return customToken;
}

export async function getInternalUserRole(
  userOSUEmail: string,
): Promise<string> {
  const defaultRole: string = USER_ROLE_ENUM.USER;

  const adminDocSnapshot: DocumentSnapshot = await fbAdminStore
    .collection(FIRESTORE_CONFIG_COLLECTION_ID)
    .doc(FIRESTORE_ADMIN_DOCUMENT_ID)
    .get();

  // Short-circuit and assign user with default role if no admin document is found.
  if (!adminDocSnapshot.exists) {
    console.error(
      'No admin document found in config collection. Assigning default (least privilege) role.',
    );
    return defaultRole;
  }

  // Short-circuit and assign user with default role if admin document is empty.
  const adminDocData: DocumentData | undefined = adminDocSnapshot.data();
  if (!adminDocData) {
    console.error(
      'Admin document is empty. Assigning default (least privilege) role.',
    );
    return defaultRole;
  }

  // Short-circuit and assign user with default role if no roles are found.
  const adminEmailArray: string[] | undefined =
    adminDocData[FIRESTORE_ADMIN_EMAIL_ARRAY_FIELDNAME];
  if (!adminEmailArray) {
    console.error(
      'No admin emails found in admin document. Assigning default (least privilege) role.',
    );
    return defaultRole;
  }

  // Assign user with admin role if user's email IS found in the array of admin emails.
  if (adminEmailArray.includes(userOSUEmail)) {
    return USER_ROLE_ENUM.ADMIN;
  }

  // Otherwise assign user with default role.
  return defaultRole;
}
