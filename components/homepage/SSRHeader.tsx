import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

import { HOME_ROUTE } from '@/constants/routeConstants';

export default function SSRHeader(): JSX.Element {
  return (
    <header className="flex-shrink-0 navbar bg-base-100 px-4 border-b">
      <Link
        href={HOME_ROUTE}
        className="flex justify-center items-center text-2xl font-extrabold gap-2"
        aria-label="Go to OSUSWE App home"
      >
        <Image
          src="/images/osuswe-logo-512.png"
          className="pe-1"
          alt="OSUSWE App Logo"
          width={45}
          height={45}
          priority={true}
        />
        <span className="sr-only">OSUSWE App</span>
        <span className="text-primary" aria-hidden="true">
          OSUSWE
        </span>
        <span className="text-accent" aria-hidden="true">
          App
        </span>
      </Link>
    </header>
  );
}
