import { z } from 'zod';

import { UserRoleSchema } from '@/schemas/UserRoleSchema';

const invalidErrorMessage: string = 'Invalid client read-only metadata';

export const ROMetadataSchema = z
  .object(
    {
      role: UserRoleSchema,
    },
    { message: invalidErrorMessage },
  )
  .strict({ message: invalidErrorMessage });

export type ROMetadata = z.infer<typeof ROMetadataSchema>;
