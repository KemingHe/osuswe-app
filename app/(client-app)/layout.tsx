import { StackProvider } from '@stackframe/stack';
import type { JSX, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import stackServerApp from '@/lib/stack-auth/stackServerApp';

export default function ClientAppLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <StackProvider app={stackServerApp}>
      {children}
      <ToastContainer position="top-center" theme="colored" />
    </StackProvider>
  );
}
