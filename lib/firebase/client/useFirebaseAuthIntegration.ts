import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import { signInWithCustomToken } from 'firebase/auth';
import { useEffect } from 'react';

import { type UseLoadingReturnProps, useLoading } from '@/hooks/useLoading';
import { fbClientAuth } from '@/lib/firebase/client/firebaseClientApp';

export interface UseFirebaseAuthIntegrationProps {
  getInternalSignInTokenServerAction: (userOSUEmail: string) => Promise<string>;
  getInteralUserRoleServerAction: (userOSUEmail: string) => Promise<string>;
}

export interface UseFirebaseAuthIntegrationReturnProps {
  isLoading: boolean;
}

export function useFirebaseAuthIntegration(): UseFirebaseAuthIntegrationReturnProps {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();

  return { isLoading };
}
