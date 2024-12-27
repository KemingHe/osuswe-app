import { usePathname } from 'next/navigation';
import type { JSX } from 'react';

import { BottomNavWireframe } from '@/components/bottomNav/BottomNavWireframe';

export default function BottomNavWrapper(): JSX.Element {
  const currentPath: string = usePathname();

  return <BottomNavWireframe currentPath={currentPath} />;
}
