'use server';

import { fbAdminAuth } from '@/lib/firebase/admin/firebaseAdminApp';
import getInternalUserRole from '@/lib/firebase/admin/getInternalUserRole';
import { type OSUEmail, OSUEmailSchema } from '@/schemas/OSUEmailSchema';
import createSHA256Hash from '@/utils/createSHA256Hash';

export async function getInternalSignInTokenServerAction(
  userOSUEmail: OSUEmail,
): Promise<string> {
  // Validate user's OSU email on server-side.
  OSUEmailSchema.parse(userOSUEmail);

  const customToken: string = await fbAdminAuth.createCustomToken(
    createSHA256Hash(userOSUEmail),
    { role: await getInternalUserRole(userOSUEmail) },
  );

  return customToken;
}
