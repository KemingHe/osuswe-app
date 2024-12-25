import { type FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { type Auth, getAuth } from 'firebase/auth';
import { type Firestore, getFirestore } from 'firebase/firestore';

import firebaseConfig from '@/lib/firebase/firebaseClientConfig';

// biome-ignore format: added alignment for clarity.
export interface FirebaseClientServices {
  fbClientApp  : FirebaseApp;
  fbClientAuth : Auth;
  fbClientStore: Firestore;
}

export function firebaseClientApp(): FirebaseClientServices {
  const fbClientApp: FirebaseApp = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

  const fbClientAuth: Auth = getAuth(fbClientApp);
  const fbClientStore: Firestore = getFirestore(fbClientApp);

  return { fbClientApp, fbClientAuth, fbClientStore };
}

export const {
  fbClientApp,
  fbClientAuth,
  fbClientStore,
}: FirebaseClientServices = firebaseClientApp();
