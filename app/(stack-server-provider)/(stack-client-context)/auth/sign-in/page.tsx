'use client';

import type { JSX } from 'react';

import { SignInWrapper } from '@/components/signIn/SignInWrapper';

import { signInServerAction } from './actions';

export default function SignInPage(): JSX.Element {
  return <SignInWrapper signInServerAction={signInServerAction} />;
}
