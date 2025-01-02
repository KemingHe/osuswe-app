import 'server-only';
import { credential } from 'firebase-admin';
import { type App, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { type Auth, getAuth } from 'firebase-admin/auth';
import { type Firestore, getFirestore } from 'firebase-admin/firestore';

import { firebaseAdminAppConfig } from '@/lib/firebase/admin/firebaseAdminAppConfig';

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface FirebaseAdminServices {
  fbAdminApp  : App;
  fbAdminAuth : Auth;
  fbAdminStore: Firestore;
}

// -----------------------------------------------------------------------------
function formatPrivateKey(privateKey: string): string {
  return privateKey.replace(/\\n/g, '\n');
}

// -----------------------------------------------------------------------------
export function firebaseAdminApp(): FirebaseAdminServices {
  const projectId: string = firebaseAdminAppConfig.projectId;
  const privateKey: string = formatPrivateKey(
    firebaseAdminAppConfig.privateKey,
  );
  const clientEmail: string = firebaseAdminAppConfig.clientEmail;

  let fbAdminApp: App;
  const fbAdminAppList: App[] | undefined = getApps();

  if (fbAdminAppList && fbAdminAppList.length > 0) {
    fbAdminApp = getApp();
  } else {
    const cert: credential.Credential = credential.cert({
      projectId,
      privateKey,
      clientEmail,
    });

    fbAdminApp = initializeApp({
      credential: cert,
      projectId,
    });
  }

  const fbAdminAuth = getAuth(fbAdminApp);
  const fbAdminStore = getFirestore(fbAdminApp);

  return { fbAdminApp, fbAdminAuth, fbAdminStore };
}

// -----------------------------------------------------------------------------
export const { fbAdminApp, fbAdminAuth, fbAdminStore }: FirebaseAdminServices =
  firebaseAdminApp();
