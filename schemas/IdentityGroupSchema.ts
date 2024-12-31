import { z } from 'zod';

export const IDENTITY_GROUP_OPTIONS: string[] = [
  'African-American',
  'Asian Connection',
  'HeForSWE (male allies of women in engineering)',
  'Latinx',
  'LGBTQ+',
  'Native-American/Indigenous Peoples',
  'Military and Veterans',
  'Disability Inclusion',
  'I do not identify with any of the above groups',
];
const identityGroupErrorMessage: string = 'Invalid identity group selection';
const isValidIdentityGroup = (value: string): boolean =>
  IDENTITY_GROUP_OPTIONS.includes(value);

export const IdentityGroupSchema = z
  .string({ message: identityGroupErrorMessage })
  .refine(isValidIdentityGroup, { message: identityGroupErrorMessage });

export type IdentityGroup = z.infer<typeof IdentityGroupSchema>;
