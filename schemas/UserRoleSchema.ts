import { z } from 'zod';

export const USER_ROLE_OPTIONS: string[] = ['admin', 'user'];
const userRoleErrorMessage: string = 'Invalid user role';
const isValidUserRole = (value: string): boolean =>
  USER_ROLE_OPTIONS.includes(value);

export const UserRoleSchema = z
  .string({ message: userRoleErrorMessage })
  .refine(isValidUserRole, { message: userRoleErrorMessage });

export type UserRole = z.infer<typeof UserRoleSchema>;
