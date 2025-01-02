import { firebaseAdminAppConfig } from '@/lib/firebase/admin/firebaseAdminAppConfig';
import isNonEmptyString from '@/utils/isNonEmptyString';

// IMPORTANT: NEVER snapshot process.env in tests. It will expose your secrets.

// Mock the 'server-only' react flag to allow unit tests to run.
vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

describe('Firebase admin config', () => {
  it('has all required properties', () => {
    expect(firebaseAdminAppConfig).toHaveProperty('projectId');
    expect(firebaseAdminAppConfig).toHaveProperty('privateKey');
    expect(firebaseAdminAppConfig).toHaveProperty('clientEmail');
  });

  it('has all required properties as non-empty strings', () => {
    expect(isNonEmptyString(firebaseAdminAppConfig.projectId)).toBe(true);
    expect(isNonEmptyString(firebaseAdminAppConfig.privateKey)).toBe(true);
    expect(isNonEmptyString(firebaseAdminAppConfig.clientEmail)).toBe(true);
  });
});
