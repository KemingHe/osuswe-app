'use client';

import type { JSX } from 'react';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import FatalError from '@/components/error/FatalError';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';

export default function TestPage(): JSX.Element {
  // Wrap the loading spinner and fatal error components with a centered wrapper.
  const WrappedLoadingSpinner = withCenteredWrapper(LoadingSpinner);
  const WrappedFatalError = withCenteredWrapper(FatalError);

  // return <WrappedLoadingSpinner />;
  return <WrappedFatalError />;
}
