import AUTH_EMAIL_LOCAL_STORAGE_KEY from '@/firebase/authEmailLocalStorageKey';

describe('The Firebase Auth emaiil local storage key', () => {
  it('matches the latest snapshot', () => {
    expect(AUTH_EMAIL_LOCAL_STORAGE_KEY).toMatchSnapshot();
  });
});
