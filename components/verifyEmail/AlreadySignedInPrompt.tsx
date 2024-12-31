import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { JSX } from 'react';

import {
  AUTH_SIGN_OUT_ROUTE,
  USER_DASHBOARD_ROUTE,
} from '@/constants/routeConstants';

export default function AlreadySignedInPrompt(): JSX.Element {
  // NOTE: Width is manually set here to be consistent with SignInWirefram,
  // refactor when ready.
  return (
    <div className="card w-72">
      <figure className="pt-8">
        <ExclamationCircleIcon className="size-14 text-success" />
      </figure>
      <div className="card-body items-center py-4 gap-4">
        {/* NOTE: Current manual width setting breaks if using text-2xl or above. */}
        <h2 className="card-title text-success">Already Signed In</h2>
        <div className="card-actions gap-4">
          <div className="w-full flex flex-col gap-2 text-sm leading-tight">
            <p>If you are here by accident:</p>
            <Link
              href={USER_DASHBOARD_ROUTE}
              className="btn btn-accent btn-sm w-full"
            >
              <ArrowLeftIcon className="size-4 -me-1.5" />
              To dashboard
            </Link>
          </div>
          <div className="w-full flex flex-col gap-2 text-sm leading-tight">
            <p>
              If you need to sign into or sign up with&nbsp;
              <span className="font-bold">another account</span>:
            </p>
            <Link
              href={AUTH_SIGN_OUT_ROUTE}
              className="btn btn-error btn-outline btn-sm w-full"
            >
              To sign out
              <ArrowRightIcon className="size-4 -ms-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
