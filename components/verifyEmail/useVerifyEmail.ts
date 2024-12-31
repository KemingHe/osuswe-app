import {
  type CurrentInternalUser,
  type CurrentUser,
  type StackClientApp,
  useStackApp,
  useUser,
} from '@stackframe/stack';
import { useCallback, useEffect, useState } from 'react';

import { type UseLoadingReturnProps, useLoading } from '@/hooks/useLoading';
import {
  type RouterResources,
  useRouterResources,
} from '@/hooks/useRouterResources';

// biome-ignore format: added alignment for clarity.
export interface UseVerifyEmailReturnProps {
  isLoading        : boolean;
  isAlreadySignedIn: boolean;
  isFailed         : boolean;
}

export function useVerifyEmail(): UseVerifyEmailReturnProps {
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();
  const [isAlreadySignedIn, setIsAlreadySignedIn] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const { pathname, searchParams }: RouterResources = useRouterResources();
  const stackClientApp: StackClientApp = useStackApp();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  // Memoize the verifySignIn function to prevent unnecessary re-renders per useEffect trigger.
  const verifySignIn = useCallback(async (): Promise<void> => {
    // IMPORTANT: Prefer explicity short-circuiting over nested if statements.

    // Short-circuit if the user is already signed in.
    // (Not setting isFailed to true because it's not a failure condition.)
    if (clientUser !== null) {
      setIsAlreadySignedIn(true);
      return;
    }

    // Extract the magic link code from the URL.
    // Short-circuit if the magic link code is not available.
    const magicLinkCode: string | null = searchParams.get('code');
    if (magicLinkCode === null) {
      setIsFailed(true);
      return;
    }

    // Attempt to sign in with the magic link code, handle any errors.
    try {
      startLoading();
      await stackClientApp.signInWithMagicLink(magicLinkCode);
    } catch (error) {
      console.error(error);
      setIsFailed(true);
    } finally {
      stopLoading();
    }
  }, [stackClientApp, pathname, searchParams, clientUser]);

  useEffect(() => {
    if (!isAlreadySignedIn && !isFailed) verifySignIn();
  }, [isFailed, verifySignIn]);

  return { isLoading, isAlreadySignedIn, isFailed };
}
