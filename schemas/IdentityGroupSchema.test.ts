import {
  IDENTITY_GROUP_OPTIONS,
  IdentityGroupSchema,
} from '@/schemas/IdentityGroupSchema';

describe('IDENTITY_GROUP_OPTIONS', () => {
  it('matches the latest snapshot', () => {
    expect(IDENTITY_GROUP_OPTIONS).toMatchSnapshot();
  });
});

describe('IdentityGroupSchema', () => {
  it('parses valid identity groups', () => {
    expect(IdentityGroupSchema.parse('African-American')).toBe(
      'African-American',
    );
    expect(IdentityGroupSchema.parse('Asian Connection')).toBe(
      'Asian Connection',
    );
    expect(
      IdentityGroupSchema.parse(
        'HeForSWE (male allies of women in engineering)',
      ),
    ).toBe('HeForSWE (male allies of women in engineering)');
    expect(IdentityGroupSchema.parse('Latinx')).toBe('Latinx');
    expect(IdentityGroupSchema.parse('LGBTQ+')).toBe('LGBTQ+');
    expect(
      IdentityGroupSchema.parse('Native-American/Indigenous Peoples'),
    ).toBe('Native-American/Indigenous Peoples');
    expect(IdentityGroupSchema.parse('Military and Veterans')).toBe(
      'Military and Veterans',
    );
    expect(IdentityGroupSchema.parse('Disability Inclusion')).toBe(
      'Disability Inclusion',
    );
    expect(
      IdentityGroupSchema.parse(
        'I do not identify with any of the above groups',
      ),
    ).toBe('I do not identify with any of the above groups');
  });

  it('throws an error for invalid identity groups', () => {
    expect(() => IdentityGroupSchema.parse('invalid')).toThrow();
    expect(() => IdentityGroupSchema.parse('')).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => IdentityGroupSchema.parse(123)).toThrow();
    expect(() => IdentityGroupSchema.parse({})).toThrow();
    expect(() => IdentityGroupSchema.parse([])).toThrow();
    expect(() => IdentityGroupSchema.parse(null)).toThrow();
    expect(() => IdentityGroupSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = IdentityGroupSchema.safeParse('invalid');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      'Invalid identity group selection',
    );
  });

  it('throws the correct error message for valid type', () => {
    const result = IdentityGroupSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      'Invalid identity group selection',
    );
  });
});
