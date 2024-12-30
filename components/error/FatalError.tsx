import { FireIcon } from '@heroicons/react/24/outline';
import type { JSX } from 'react';

export default function FatalError(): JSX.Element {
  return (
    <div
      className="card size-48"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <figure className="pt-8">
        {/* Size matching the LoadingSpinner logo of 60px x 60px. */}
        <FireIcon className="w-[60px] h-[60px] text-error" aria-hidden="true" />
      </figure>
      <div className="card-body pt-4 text-center text-lg">
        <p className="h-full flex flex-col justify-center items-center leading-snug">
          <span className="sr-only">Service Unavailable</span>
          <span aria-hidden="true">Service</span>
          <span aria-hidden="true">Unavailable</span>
        </p>
      </div>
    </div>
  );
}
