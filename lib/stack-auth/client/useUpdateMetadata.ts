import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import { useCallback, useEffect, useState } from 'react';

import { type UseLoadingReturnProps, useLoading } from '@/hooks/useLoading';

export interface UseUpdateMetadataReturnProps {
  isLoading: boolean;
  isErrored: boolean;
}

export function useUpdateMetadata(
  updateMetadataServerAction: () => Promise<void>,
): UseUpdateMetadataReturnProps {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();
  const [isErrored, setIsErrored] = useState<boolean>(false);

  const handleUpdateMedatada = useCallback(async () => {
    setIsErrored(false);

    // On sign in, update the user metadata.
    if (clientUser !== null) {
      startLoading();
      try {
        await updateMetadataServerAction();
      } catch (error) {
        setIsErrored(true);
        // console.error('Failed to update user metadata with error:', error);
      } finally {
        stopLoading();
      }
    }
  }, [clientUser]);

  useEffect(() => {
    handleUpdateMedatada();
  }, [handleUpdateMedatada]);

  return { isLoading, isErrored };
}
