import 'server-only';

export const FIRESTORE_CONFIG_COLLECTION_ID: string = process.env
  .FIRESTORE_CONFIG_COLLECTION_ID as string;
export const FIRESTORE_ADMIN_DOCUMENT_ID: string = process.env
  .FIRESTORE_ADMIN_DOCUMENT_ID as string;
export const FIRESTORE_ADMIN_EMAIL_ARRAY_FIELDNAME: string = process.env
  .FIRESTORE_ADMIN_EMAIL_ARRAY_FIELDNAME as string;
