import 'server-only';

// biome-ignore format: added alignment for clarity.
export interface FirebaseAdminConfig {
  projectId  : string;
  privateKey : string;
  clientEmail: string;
}

export const firebaseAdminAppConfig: FirebaseAdminConfig =
  // biome-ignore format: added alignment for clarity.
  {
    projectId  : process.env.FIREBASE_ADMIN_PROJECT_ID    as string,
    privateKey : process.env.FIREBASE_ADMIN_PRIVATE_KEY   as string,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL  as string,
};
