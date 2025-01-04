// IMPORTANT: Good example for mocking a custom hook. Refer back often.

import { useUser } from '@stackframe/stack';
import { renderHook } from '@testing-library/react';
import type { Mock } from 'vitest';

import { useUserEmail } from '@/lib/stack-auth/client/useUserEmail';

vi.mock('@stackframe/stack', () => ({
  useUser: vi.fn(),
}));

describe('The useUserEmail (custom client-side Stack-Auth) hook', () => {
  beforeEach(() => {
    // Reset the mock state and implementation before each test.
    vi.resetAllMocks();
  });

  it('has correct return prop values when the user is not signed in', () => {
    (useUser as Mock).mockReturnValue(null);

    const { result } = renderHook(() => useUserEmail());

    expect(result.current.isSignedIn).toBe(false);
    expect(result.current.userEmail).toBe(undefined);
  });

  it('has correct return prop values when user is available but user.primaryEmail is not available', () => {
    (useUser as Mock).mockReturnValue({});

    const { result } = renderHook(() => useUserEmail());

    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.userEmail).toBe(undefined);
  });

  it('has correct return prop values when user and user.primaryEmail are available', () => {
    const mockEmail = 'test@example.com';
    (useUser as Mock).mockReturnValue({ primaryEmail: mockEmail });

    const { result } = renderHook(() => useUserEmail());

    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.userEmail).toBe(mockEmail);
  });

  it('has correct return prop values when user and user.primaryEmail are available, but user.primaryEmail is null', () => {
    (useUser as Mock).mockReturnValue({ primaryEmail: null });

    const { result } = renderHook(() => useUserEmail());

    // Verify the return values.
    expect(result.current.isSignedIn).toBe(true);
    expect(result.current.userEmail).toBe(undefined);
  });
});
