import { z } from 'zod';

export enum USER_ROLE_ENUM {
  ADMIN = 'admin',
  USER = 'user',
}

export const USER_ROLE_OPTIONS: string[] = [
  USER_ROLE_ENUM.ADMIN,
  USER_ROLE_ENUM.USER,
];

const userRoleErrorMessage: string = 'Invalid user role';
const isValidUserRole = (value: string): boolean =>
  USER_ROLE_OPTIONS.includes(value);

export const UserRoleSchema = z
  .string({ message: userRoleErrorMessage })
  .refine(isValidUserRole, { message: userRoleErrorMessage });

export type UserRole = z.infer<typeof UserRoleSchema>;
