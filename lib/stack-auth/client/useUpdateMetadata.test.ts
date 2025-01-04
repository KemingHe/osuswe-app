import { useUser } from '@stackframe/stack';
import { act, renderHook } from '@testing-library/react';
import type { Mock } from 'vitest';

import { useUpdateMetadata } from '@/lib/stack-auth/client/useUpdateMetadata';

vi.mock('@stackframe/stack', () => ({
  useUser: vi.fn(),
}));

const mockUpdateMetadataServerAction: Mock = vi.fn();

describe('The useUpdateMetadata (custom client-side Stack-Auth) hook', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('calls updateMetadataServerAction when user is present', async () => {
    (useUser as Mock).mockReturnValue({});

    const { result } = renderHook(() =>
      useUpdateMetadata(mockUpdateMetadataServerAction),
    );

    await act(async () => {
      result.current;
    });

    expect(mockUpdateMetadataServerAction).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isErrored).toBe(false);
  });

  it('skips calling updateMetadataServerAction when user is null', async () => {
    (useUser as Mock).mockReturnValue(null);

    const { result } = renderHook(() =>
      useUpdateMetadata(mockUpdateMetadataServerAction),
    );

    await act(async () => {
      result.current;
    });

    expect(mockUpdateMetadataServerAction).not.toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isErrored).toBe(false);
  });

  it('sets isErrored to true when updateMetadataServerAction throws an error', async () => {
    (useUser as Mock).mockReturnValue({});
    mockUpdateMetadataServerAction.mockRejectedValue(new Error('Test error'));

    const { result } = renderHook(() =>
      useUpdateMetadata(mockUpdateMetadataServerAction),
    );

    await act(async () => {
      result.current;
    });

    expect(mockUpdateMetadataServerAction).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isErrored).toBe(true);
  });

  it('sets isLoading to true during the server action call and back to false when finished', async () => {
    (useUser as Mock).mockReturnValue({});
    let resolveAction: () => void;
    const mockPromise = new Promise<void>((resolve) => {
      resolveAction = resolve;
    });
    mockUpdateMetadataServerAction.mockReturnValue(mockPromise);

    const { result } = renderHook(() =>
      useUpdateMetadata(mockUpdateMetadataServerAction),
    );

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      resolveAction();
      await mockPromise;
    });

    expect(result.current.isLoading).toBe(false);
  });
});
