import { renderHook } from '@testing-library/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Mock } from 'vitest';

import { useRouterResources } from '@/hooks/useRouterResources';

// IMPORTANT: Must first mock into vi.fn() before modding the return value.
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('The useRouterResources hook', () => {
  it('returns the clientRouter, pathname, and searchParams from next/navigation', () => {
    (useRouter as Mock).mockReturnValue('test-useRouter');
    (usePathname as Mock).mockReturnValue('test-usePathname');
    (useSearchParams as Mock).mockReturnValue('test-useSearchParams');
    const { result } = renderHook(() => useRouterResources());

    expect(result.current).toEqual({
      clientRouter: 'test-useRouter',
      pathname: 'test-usePathname',
      searchParams: 'test-useSearchParams',
    });
  });
});
