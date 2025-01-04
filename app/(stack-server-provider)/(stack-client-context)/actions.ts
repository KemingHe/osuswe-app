'use server';

import type { CurrentServerUser } from '@stackframe/stack';

import getInternalUserRole from '@/lib/firebase/admin/getInternalUserRole';
import stackServerApp from '@/lib/stack-auth/server/stackServerApp';
import { type OSUEmail, OSUEmailSchema } from '@/schemas/OSUEmailSchema';
import { type ROMetadata, ROMetadataSchema } from '@/schemas/ROMetadataSchema';
import type { UserRole } from '@/schemas/UserRoleSchema';

export async function updateMetadata(): Promise<void> {
  const serverUser: CurrentServerUser | null = await stackServerApp.getUser();

  // Short-circuit if user is not available.
  if (!serverUser) throw new Error('User not available');

  // Validate user email on server-side, throw ZodError if invalid.
  const userOSUEmail: OSUEmail = OSUEmailSchema.parse(serverUser.primaryEmail);

  // Update user's client-readonly metadata (role) on server-side.
  const userRole: UserRole = await getInternalUserRole(userOSUEmail);
  const updatedORMetadata: ROMetadata = ROMetadataSchema.parse({
    role: userRole,
  });
  await serverUser.update({ clientReadOnlyMetadata: updatedORMetadata });
}
