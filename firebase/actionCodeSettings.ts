import type { ActionCodeSettings } from 'firebase/auth';

import { AUTH_VERIFY_ROUTE } from '@/constants/routeConstants';

// Firebase client-side auth (web app only) action code settings.
const actionCodeSettings: ActionCodeSettings = {
  url: `${window.location.origin}${AUTH_VERIFY_ROUTE}`,
  handleCodeInApp: true,
};

export default actionCodeSettings;
