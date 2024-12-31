import Image from 'next/image';
import type { JSX } from 'react';

import styles from '@/components/loading/LoadingSpinner.module.css';
import { DEFAULT_LOADING_MESSAGE } from '@/constants/loadingMessageConstants';

export interface LoadingSpinnerProps {
  message?: string;
}

export function LoadingSpinner({
  message = DEFAULT_LOADING_MESSAGE,
}: LoadingSpinnerProps): JSX.Element {
  return (
    <output className="card size-48" aria-live="polite">
      <figure className="pt-8">
        <Image
          className={styles['loading-spinner-image']}
          src="/images/osuswe-logo-512.png"
          alt="Loading spinner"
          width={60}
          height={60}
          priority={true}
        />
      </figure>
      <div className="card-body px-6 pt-4 pb-8 text-center text-lg leading-snug">
        <p className="h-full flex items-center justify-center">{message}</p>
      </div>
    </output>
  );
}
