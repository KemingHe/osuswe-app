import actionCodeSettings from '@/firebase/actionCodeSettings';

// Use an arrow function as the second argument for vi.mock()
// instead of the mocked module directly.
vi.mock('@/constants/routeConstants', () => ({
  AUTH_VERIFY_ROUTE: '/auth/verify',
}));

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    value: {
      // 'origin' includes: protocol (http), host (localhost), and port (3000).
      origin: 'http://localhost:3000',
    },
    writable: true,
  });
});

describe('actionCodeSettings', () => {
  it('should have the correct URL', () => {
    expect(actionCodeSettings.url).toBe('http://localhost:3000/auth/verify');
  });

  it('should have handleCodeInApp set to true', () => {
    expect(actionCodeSettings.handleCodeInApp).toBe(true);
  });

  it('should match the snapshot', () => {
    expect(actionCodeSettings).toMatchSnapshot();
  });
});
