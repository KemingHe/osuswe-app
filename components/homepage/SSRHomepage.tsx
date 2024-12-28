import type { JSX } from 'react';

import GitHubCorner from '@/components/homepage/GitHubCorner';
import SSRFooter from '@/components/homepage/SSRFooter';
import SSRHeader from '@/components/homepage/SSRHeader';
import SSRMain from '@/components/homepage/main/SSRMain';

export default function SSRHomepage(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col bg-base-content">
      <GitHubCorner />
      <SSRHeader />
      <SSRMain />
      <SSRFooter />
    </div>
  );
}
