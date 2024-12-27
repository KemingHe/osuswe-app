import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

import { USER_DASHBOARD_ROUTE } from '@/constants/routeConstants';

export default function MainHero(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mb-6">
      <Image
        src="/images/hero-image-2-1920x1080px.png"
        alt="A group of empowered young women in STEM similing"
        width={1920}
        height={1080}
        priority={true}
      />
      <Link
        href={USER_DASHBOARD_ROUTE}
        className="btn btn-lg btn-accent shadow-md"
        aria-label="Go to user dashboard"
      >
        Get Started
        <ArrowRightIcon className="size-4 -ms-1" aria-hidden="true" />
      </Link>
      <p className="text-center text-primary font-bold px-12">
        The Ohio State-exclusive SWE experience created by students and allies,
        for students, with 💖.
      </p>
    </div>
  );
}
