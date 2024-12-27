import type { JSX } from 'react';

import MainDevTimeline from '@/components/homepage/main/MainDevTimeline';
import MainHero from '@/components/homepage/main/MainHero';
import MainTitle from '@/components/homepage/main/MainTitle';

export default function SSRMain(): JSX.Element {
  return (
    <main className="flex-grow flex flex-col">
      <MainTitle />
      <MainHero />
      <MainDevTimeline />
    </main>
  );
}
