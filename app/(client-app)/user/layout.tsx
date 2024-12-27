'use client';

import type { JSX, ReactNode } from 'react';

import BottomNavWrapper from '@/components/bottomNav/BottomNavWrapper';
import RequiresSignedInGuard from '@/guards/RequiresSignedInGuard';

export default function UserLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <RequiresSignedInGuard>
      <div className="h-full flex flex-col">
        <div className="flex-grow min-h-0">{children}</div>
        <BottomNavWrapper />
      </div>
    </RequiresSignedInGuard>
  );
}
