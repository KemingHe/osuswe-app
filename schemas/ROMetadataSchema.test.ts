import { type ROMetadata, ROMetadataSchema } from '@/schemas/ROMetadataSchema';
import { USER_ROLE_ENUM } from '@/schemas/UserRoleSchema';

// NOTE: This is an integration test for the ROMetadataSchema,
// hence not mocking the UserRoleSchema.

describe('ROMetadataSchema', () => {
  it('validates a valid ROMetadata object', () => {
    const validROMetadata: ROMetadata = {
      role: USER_ROLE_ENUM.USER,
    };
    expect(ROMetadataSchema.parse(validROMetadata)).toEqual(validROMetadata);
  });

  it('throws an error for an invalid ROMetadata object', () => {
    expect(() => ROMetadataSchema.parse({})).toThrow();
    expect(() => ROMetadataSchema.parse({ role: 'invalid' })).toThrow();
    expect(() =>
      ROMetadataSchema.parse({
        role: USER_ROLE_ENUM.USER,
        invalidField: 'invalid',
      }),
    ).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => ROMetadataSchema.parse(123)).toThrow();
    expect(() => ROMetadataSchema.parse('invalid')).toThrow();
    expect(() => ROMetadataSchema.parse(null)).toThrow();
    expect(() => ROMetadataSchema.parse(undefined)).toThrow();
    expect(() => ROMetadataSchema.parse(true)).toThrow();
    expect(() => ROMetadataSchema.parse([])).toThrow();
  });

  it('throws the correct error message for an invalid ROMetadata object', () => {
    const result = ROMetadataSchema.safeParse({ role: 'invalid' });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid user role');
  });

  it('throws the correct error message for an invalid type', () => {
    const result = ROMetadataSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      'Invalid client read-only metadata',
    );
  });
});
