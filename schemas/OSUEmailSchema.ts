import { OSU_DOT_EDU_EMAIL_PATTERN } from '@keminghe/osu';
import { z } from 'zod';

const invalidErrorMessage: string = 'Enter a valid @osu.edu email';

export const OSUEmailSchema = z
  .string({ message: invalidErrorMessage })
  .regex(OSU_DOT_EDU_EMAIL_PATTERN, { message: invalidErrorMessage });

export type OSUEmail = z.infer<typeof OSUEmailSchema>;
