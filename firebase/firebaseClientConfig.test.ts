import isNonEmptyString from '@/utils/isNonEmptyString';

import firebaseClientConfig from '@/firebase/firebaseClientConfig';

// IMPORTANT: NEVER snapshot process.env in tests. It will expose your secrets.

describe('Firebase client config', () => {
  it('should have all required properties', () => {
    expect(firebaseClientConfig).toHaveProperty('apiKey');
    expect(firebaseClientConfig).toHaveProperty('authDomain');
    expect(firebaseClientConfig).toHaveProperty('projectId');
    expect(firebaseClientConfig).toHaveProperty('storageBucket');
    expect(firebaseClientConfig).toHaveProperty('messagingSenderId');
    expect(firebaseClientConfig).toHaveProperty('appId');
    expect(firebaseClientConfig).toHaveProperty('measurementId');
  });

  it('should have all required properties as non-empty strings', () => {
    expect(isNonEmptyString(firebaseClientConfig.apiKey)).toBe(true);
    expect(isNonEmptyString(firebaseClientConfig.authDomain)).toBe(true);
    expect(isNonEmptyString(firebaseClientConfig.projectId)).toBe(true);
    expect(isNonEmptyString(firebaseClientConfig.storageBucket)).toBe(true);
    expect(isNonEmptyString(firebaseClientConfig.messagingSenderId)).toBe(true);
    expect(isNonEmptyString(firebaseClientConfig.appId)).toBe(true);
    expect(isNonEmptyString(firebaseClientConfig.measurementId)).toBe(true);
  });
});
