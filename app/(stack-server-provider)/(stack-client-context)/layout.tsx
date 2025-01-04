'use client';

import type { JSX, ReactNode } from 'react';

import FatalError from '@/components/error/FatalError';
import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import { UPDATE_METADATA_LOADING_MESSAGE } from '@/constants/loadingMessageConstants';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';
import {
  type UseUpdateMetadataReturnProps,
  useUpdateMetadata,
} from '@/lib/stack-auth/client/useUpdateMetadata';

import { updateMetadata as updateMetadataServerAction } from './actions';

export default function FirebaseContextLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const WrappedLoadingSpinner = withCenteredWrapper(() => (
    <LoadingSpinner message={UPDATE_METADATA_LOADING_MESSAGE} />
  ));
  const WrappedFatalError = withCenteredWrapper(FatalError);
  const { isLoading, isErrored }: UseUpdateMetadataReturnProps =
    useUpdateMetadata(updateMetadataServerAction);
  const renderChildren = (): JSX.Element => {
    if (isLoading) return <WrappedLoadingSpinner />;
    if (isErrored) return <WrappedFatalError />;
    return <>{children}</>;
  };

  return renderChildren();
}
