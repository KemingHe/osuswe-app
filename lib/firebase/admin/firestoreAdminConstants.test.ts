import * as firestoreAdminConstants from '@/lib/firebase/admin/firestoreAdminConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

// IMPORTANT: NEVER snapshot process.env in tests. It will expose your secrets.

// Mock the 'server-only' react flag to allow unit tests to run.
vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

describe('Firestore admin constants', () => {
  it('has all required properties', () => {
    expect(firestoreAdminConstants).toHaveProperty(
      'FIRESTORE_CONFIG_COLLECTION_ID',
    );
    expect(firestoreAdminConstants).toHaveProperty(
      'FIRESTORE_ADMIN_DOCUMENT_ID',
    );
    expect(firestoreAdminConstants).toHaveProperty(
      'FIRESTORE_ADMIN_EMAIL_ARRAY_FIELDNAME',
    );
  });

  it('has all required properties as non-empty strings', () => {
    expect(
      isNonEmptyString(firestoreAdminConstants.FIRESTORE_CONFIG_COLLECTION_ID),
    ).toBe(true);
    expect(
      isNonEmptyString(firestoreAdminConstants.FIRESTORE_ADMIN_DOCUMENT_ID),
    ).toBe(true);
    expect(
      isNonEmptyString(
        firestoreAdminConstants.FIRESTORE_ADMIN_EMAIL_ARRAY_FIELDNAME,
      ),
    ).toBe(true);
  });
});
