import { USER_ROLE_OPTIONS, UserRoleSchema } from '@/schemas/UserRoleSchema';

describe('USER_ROLE_OPTIONS', () => {
  it('matches the latest snapshot', () => {
    expect(USER_ROLE_OPTIONS).toMatchSnapshot();
  });
});

describe('UserRoleSchema', () => {
  it('parses valid user roles', () => {
    expect(UserRoleSchema.parse('admin')).toBe('admin');
    expect(UserRoleSchema.parse('user')).toBe('user');
  });

  it('throws an error for invalid user roles', () => {
    expect(() => UserRoleSchema.parse('invalid')).toThrow();
    expect(() => UserRoleSchema.parse('')).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => UserRoleSchema.parse(123)).toThrow();
    expect(() => UserRoleSchema.parse({})).toThrow();
    expect(() => UserRoleSchema.parse([])).toThrow();
    expect(() => UserRoleSchema.parse(null)).toThrow();
    expect(() => UserRoleSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = UserRoleSchema.safeParse('invalid');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toEqual('Invalid user role');
  });

  it('throws the correct error message for valid type', () => {
    const result = UserRoleSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toEqual('Invalid user role');
  });
});
