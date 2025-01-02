import isNonEmptyString from '@/utils/isNonEmptyString';

import firebaseClientAppConfig from '@/lib/firebase/client/firebaseClientAppConfig';

// IMPORTANT: NEVER snapshot process.env in tests. It will expose your secrets.

describe('Firebase client config', () => {
  it('should have all required properties', () => {
    expect(firebaseClientAppConfig).toHaveProperty('apiKey');
    expect(firebaseClientAppConfig).toHaveProperty('authDomain');
    expect(firebaseClientAppConfig).toHaveProperty('projectId');
    expect(firebaseClientAppConfig).toHaveProperty('storageBucket');
    expect(firebaseClientAppConfig).toHaveProperty('messagingSenderId');
    expect(firebaseClientAppConfig).toHaveProperty('appId');
    expect(firebaseClientAppConfig).toHaveProperty('measurementId');
  });

  it('should have all required properties as non-empty strings', () => {
    expect(isNonEmptyString(firebaseClientAppConfig.apiKey)).toBe(true);
    expect(isNonEmptyString(firebaseClientAppConfig.authDomain)).toBe(true);
    expect(isNonEmptyString(firebaseClientAppConfig.projectId)).toBe(true);
    expect(isNonEmptyString(firebaseClientAppConfig.storageBucket)).toBe(true);
    expect(isNonEmptyString(firebaseClientAppConfig.messagingSenderId)).toBe(
      true,
    );
    expect(isNonEmptyString(firebaseClientAppConfig.appId)).toBe(true);
    expect(isNonEmptyString(firebaseClientAppConfig.measurementId)).toBe(true);
  });
});
