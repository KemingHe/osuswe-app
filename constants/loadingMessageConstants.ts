// IMPORTANT: 'Redirecting to dashboard...' is the longest string
// that can be properly displayed in the loading message component.
// DO NOT exceed this length when creating new loading messages.

// Default loading message.
export const DEFAULT_LOADING_MESSAGE: string = 'Loading...';

// Stack-Auth loading messages.
export const STACK_PROVIDER_LOADING_MESSAGE: string =
  'Securing your session...';
export const STACK_ROLE_PROVIDER_LOADING_MESSAGE: string =
  'Fetching user roles...';
export const REQUIRES_SIGNED_IN_GUARD_REDIRECTING_MESSAGE: string =
  'Redirecting to sign in...';
export const REDIRECT_ONCE_SIGNED_IN_GUARD_REDIRECTING_MESSAGE: string =
  'Redirecting to dashboard...';
export const VERIFY_EMAIL_LOADING_MESSAGE: string = 'Verifying your email...';

// Firebase loading messages.
export const FIREBASE_AUTH_INTEGRATION_LOADING_MESSAGE: string =
  'Validating your role...';
export const FIREBASE_AUTH_PROVIDER_LOADING_MESSAGE: string =
  'Signing you in...';
