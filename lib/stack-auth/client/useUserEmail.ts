import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';

// biome-ignore format: added alignment for clarity.
export interface UseUserEmailReturnProps {
  isSignedIn: boolean;
  userEmail : string | undefined;
}

export function useUserEmail(): UseUserEmailReturnProps {
  const user: CurrentUser | CurrentInternalUser | null = useUser();
  return {
    isSignedIn: user !== null,
    userEmail: user?.primaryEmail ?? undefined,
  };
}
