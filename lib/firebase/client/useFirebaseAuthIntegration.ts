import { signInWithCustomToken, signOut } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';

import { type UseLoadingReturnProps, useLoading } from '@/hooks/useLoading';
import { fbClientAuth } from '@/lib/firebase/client/firebaseClientApp';
import {
  type UseUserEmailReturnProps,
  useUserEmail,
} from '@/lib/stack-auth/client/useUserEmail';
import { type OSUEmail, OSUEmailSchema } from '@/schemas/OSUEmailSchema';

export interface UseFirebaseAuthIntegrationProps {
  getInternalSignInTokenServerAction: (
    userOSUEmail: OSUEmail,
  ) => Promise<string>;
}

export interface UseFirebaseAuthIntegrationReturnProps {
  isSignInLoading: boolean;
  isSignInErrored: boolean;
}

export function useFirebaseAuthIntegration({
  getInternalSignInTokenServerAction,
}: UseFirebaseAuthIntegrationProps): UseFirebaseAuthIntegrationReturnProps {
  const { isSignedIn, userEmail }: UseUserEmailReturnProps = useUserEmail();
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();
  const [isSignInErrored, setIsSignInErrored] = useState<boolean>(false);

  // ---------------------------------------------------------------------------
  const handleAuthIntegration = useCallback(async () => {
    // console.log('Stack-Auth state changed, refreshing the integrated Firebase Auth state...');
    setIsSignInErrored(false);

    // On Stack-Auth state change, sign in or sign out of Firebase Auth.
    if (isSignedIn) {
      // Short-circuit and flag as error if user email is invalid.
      if (!userEmail || !OSUEmailSchema.safeParse(userEmail).success) {
        setIsSignInErrored(true);
        console.error('Invalid user OSU email');
        return;
      }

      startLoading();
      try {
        const internalSignInToken =
          await getInternalSignInTokenServerAction(userEmail);
        await signInWithCustomToken(fbClientAuth, internalSignInToken);
        // console.log('Successfully signed in with Firebase Auth custom token.');
      } catch (error) {
        setIsSignInErrored(true);
        console.error(
          'Failed to sign in with Firebase Auth custom token:',
          error,
        );
      } finally {
        stopLoading();
      }
    } else {
      signOut(fbClientAuth);
      // console.log('Successfully signed out of Firebase Auth.');
    }
  }, [isSignedIn, userEmail]);

  // ---------------------------------------------------------------------------
  useEffect(() => {
    handleAuthIntegration();

    // Clean up the per-session only Firebase Auth state on unmount.
    return () => {
      signOut(fbClientAuth);
      // console.log('Successfully signed out of Firebase Auth.');
    };
  }, [handleAuthIntegration]);

  // ---------------------------------------------------------------------------
  return {
    isSignInLoading: isLoading,
    isSignInErrored,
  };
}
