'use client';

import type { JSX, ReactNode } from 'react';

export default function FirebaseContextLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <>{children}</>;
}
