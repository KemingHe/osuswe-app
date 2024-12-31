import type { JSX } from 'react';

import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import AlreadySignedInPrompt from '@/components/verifyEmail/AlreadySignedInPrompt';
import VerificationFailurePrompt from '@/components/verifyEmail/VerificationFailurePrompt';
import { VERIFY_EMAIL_LOADING_MESSAGE } from '@/constants/loadingMessageConstants';

// biome-ignore format: added alignment for clarity.
export interface VerifyEmailWireframeProps {
  isAlreadySignedIn: boolean;
  isFailed         : boolean;
}

export function VerifyEmailWireframe({
  isAlreadySignedIn,
  isFailed,
}: VerifyEmailWireframeProps): JSX.Element {
  const renderVerifyEmailComponent = (): JSX.Element => {
    if (isAlreadySignedIn) return <AlreadySignedInPrompt />;
    if (isFailed) return <VerificationFailurePrompt />;
    return <LoadingSpinner message={VERIFY_EMAIL_LOADING_MESSAGE} />;
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {renderVerifyEmailComponent()}
    </main>
  );
}
