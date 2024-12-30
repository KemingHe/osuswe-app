'use client';

import type { JSX } from 'react';

import FatalError from '@/components/error/FatalError';
import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';

export default function TestPage(): JSX.Element {
  // const WrappedLoadingSpinner = withCenteredWrapper(LoadingSpinner);
  // const loadingMessage: string = 'Redirecting to sign in...';
  // return <WrappedLoadingSpinner message={loadingMessage} />;
  const WrappedFatalError = withCenteredWrapper(FatalError);
  return <WrappedFatalError />;
}
