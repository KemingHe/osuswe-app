import isNonEmptyString from '@/utils/isNonEmptyString';

import { firebaseAdminConfig } from '@/firebase/firebaseAdminConfig';

// IMPORTANT: NEVER snapshot process.env in tests. It will expose your secrets.

describe('Firebase admin config', () => {
  it('should have all required properties', () => {
    expect(firebaseAdminConfig).toHaveProperty('projectId');
    expect(firebaseAdminConfig).toHaveProperty('privateKey');
    expect(firebaseAdminConfig).toHaveProperty('clientEmail');
  });

  it('should have all required properties as non-empty strings', () => {
    expect(isNonEmptyString(firebaseAdminConfig.projectId)).toBe(true);
    expect(isNonEmptyString(firebaseAdminConfig.privateKey)).toBe(true);
    expect(isNonEmptyString(firebaseAdminConfig.clientEmail)).toBe(true);
  });
});
