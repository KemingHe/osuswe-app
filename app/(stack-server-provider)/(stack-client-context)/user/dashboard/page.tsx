'use client';

import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

export default function DashboardPage(): JSX.Element {
  const user: CurrentUser | CurrentInternalUser | null = useUser();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Paragraph about dashboard.</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log(user?.clientReadOnlyMetadata?.role);
        }}
      >
        Print your role to console
      </button>
    </div>
  );
}
