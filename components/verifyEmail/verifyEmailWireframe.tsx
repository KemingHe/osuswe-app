import type { JSX } from 'react';

import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import FailurePrompt from '@/components/verifyEmail/FailurePrompt';
import { VERIFY_EMAIL_LOADING_MESSAGE } from '@/constants/loadingMessageConstants';

export interface VerifyEmailWireframeProps {
  isFailed: boolean;
}

export function VerifyEmailWireframe({
  isFailed,
}: VerifyEmailWireframeProps): JSX.Element {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {isFailed ? (
        <FailurePrompt />
      ) : (
        <LoadingSpinner message={VERIFY_EMAIL_LOADING_MESSAGE} />
      )}
    </main>
  );
}
