'use client';

import type { JSX } from 'react';

import FatalError from '@/components/error/FatalError';
import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';

export default function TestPage(): JSX.Element {
  // Wrap the loading spinner and fatal error components with a centered wrapper.
  const WrappedLoadingSpinner = withCenteredWrapper(LoadingSpinner);
  const WrappedFatalError = withCenteredWrapper(FatalError);

  return <WrappedLoadingSpinner />;
  // return <WrappedFatalError />;
}
