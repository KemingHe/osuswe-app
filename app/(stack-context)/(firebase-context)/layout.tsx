'use client';

import type { JSX, ReactNode } from 'react';

import FatalError from '@/components/error/FatalError';
import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import { FIREBASE_AUTH_INTEGRATION_LOADING_MESSAGE } from '@/constants/loadingMessageConstants';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';
import {
  type UseFirebaseAuthIntegrationReturnProps,
  useFirebaseAuthIntegration,
} from '@/lib/firebase/client/useFirebaseAuthIntegration';

import { getInternalSignInTokenServerAction } from './actions';

export default function FirebaseContextLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const WrappedLoadingSpinner = withCenteredWrapper(() => (
    <LoadingSpinner message={FIREBASE_AUTH_INTEGRATION_LOADING_MESSAGE} />
  ));
  const WrappedFatalError = withCenteredWrapper(FatalError);
  const {
    isSignInLoading,
    isSignInErrored,
  }: UseFirebaseAuthIntegrationReturnProps = useFirebaseAuthIntegration({
    getInternalSignInTokenServerAction,
  });

  if (isSignInLoading) return <WrappedLoadingSpinner />;
  if (isSignInErrored) return <WrappedFatalError />;
  return <>{children}</>;
}
