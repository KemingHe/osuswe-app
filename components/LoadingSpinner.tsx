import Image from 'next/image';
import type { JSX } from 'react';

export interface LoadingSpinnerProps {
  message?: string;
}

export function LoadingSpinner({
  message = 'Loading...',
}: LoadingSpinnerProps): JSX.Element {
  return (
    <output
      className="card bg-base-200 shadow-lg text-center"
      aria-live="polite"
    >
      <div className="card-body items-center gap-3 text-lg">
        <Image
          className="loading-spinner-image"
          src="/images/osuswe-logo-512.png"
          alt="Loading spinner"
          width={50}
          height={50}
          priority={true}
        />
        <p className="text-center">{message}</p>
      </div>
    </output>
  );
}