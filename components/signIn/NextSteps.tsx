import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { JSX } from 'react';

export default function NextSteps(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center gap-2.5">
      <CheckCircleIcon className="size-14 text-success -mb-1" />
      <h3 className="text-success text-lg font-semibold">Check your email</h3>
      <p className="text-sm text-center leading-tight">
        Click the verification link sent to your Ohio State&nbsp;
        <Link
          className="link link-accent inline-flex items-center"
          href="https://buckeyemail.osu.edu/"
        >
          email
          <ArrowUpRightIcon className="size-4 -ml-0.5" />
        </Link>
        &nbsp;to sign in.
      </p>
    </div>
  );
}
