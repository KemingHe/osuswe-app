import { ArrowRightIcon, ArrowUturnLeftIcon } from '@heroicons/react/16/solid';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import type { JSX, MouseEventHandler } from 'react';

// biome-ignore format: added alignment for clarity.
export interface SignOutWireframeProps {
  isLoading     : boolean;
  goBackHandler : MouseEventHandler<HTMLButtonElement>;
  signOutHandler: MouseEventHandler<HTMLButtonElement>;
}

export function SignOutWireframe({
  isLoading,
  goBackHandler,
  signOutHandler,
}: SignOutWireframeProps): JSX.Element {
  // NOTE: Width is manually set here to be consistent with SignInWirefram,
  // refactor when ready.
  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      <div className="card bg-base-200 shadow-lg w-72">
        <figure className="pt-8">
          <ArrowRightStartOnRectangleIcon className="size-12 text-error" />
        </figure>
        <div className="card-body items-center py-4 gap-4">
          {/* NOTE: Current manual width setting breaks if using text-2xl or above. */}
          <h2 className="card-title text-primary">Are you sure?</h2>
          <div className="card-actions gap-4">
            <div className="flex flex-col gap-2 text-sm text-center leading-snug">
              <p>
                You will lose&nbsp;
                <span className="font-semibold text-accent">FREE</span>
                &nbsp;access to the latest features and more.
              </p>
            </div>
            <div className="w-full flex items-center justify-around">
              {/*
               * Auto button width is between 6 and 7 rem,
               * using 6rem as min width to maintain style
               * when transition to loading.
               */}
              <button
                type="button"
                className={`btn ${isLoading ? 'btn-disabled' : 'btn-accent'} btn-sm min-w-24`}
                onClick={goBackHandler}
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md" />
                ) : (
                  <span>Go back</span>
                )}
                <ArrowUturnLeftIcon className="size-4 -ms-1.5" />
              </button>
              <button
                type="button"
                className={`btn ${isLoading ? 'btn-disabled' : 'btn-error'} btn-outline btn-sm min-w-24`}
                onClick={signOutHandler}
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md" />
                ) : (
                  <span>Sign out</span>
                )}
                <ArrowRightIcon className="size-4 -ms-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
