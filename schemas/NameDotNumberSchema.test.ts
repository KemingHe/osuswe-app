import { NameDotNumberSchema } from '@/schemas/NameDotNumberSchema';

describe('NameDotNumberSchema', () => {
  it('parses valid name dot numbers without error', () => {
    expect(NameDotNumberSchema.parse('buckeye.1')).toBe('buckeye.1');
    expect(NameDotNumberSchema.parse('buck-eye.123')).toBe('buck-eye.123');
    expect(NameDotNumberSchema.parse('bu-ck-eye.1')).toBe('bu-ck-eye.1');
  });

  it('throws an error for invalid name dot numbers', () => {
    expect(() => NameDotNumberSchema.parse('')).toThrow();
    expect(() => NameDotNumberSchema.parse('buckeye')).toThrow();
    expect(() => NameDotNumberSchema.parse('buckeye.0')).toThrow();
    expect(() => NameDotNumberSchema.parse('buckeye.1.2')).toThrow();
  });

  it('throws an error for non-string values', () => {
    expect(() => NameDotNumberSchema.parse(1)).toThrow();
    expect(() => NameDotNumberSchema.parse({})).toThrow();
    expect(() => NameDotNumberSchema.parse([])).toThrow();
    expect(() => NameDotNumberSchema.parse(null)).toThrow();
    expect(() => NameDotNumberSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = NameDotNumberSchema.safeParse('buckeye.0');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toEqual('Enter a valid name.#');
  });

  it('throws the correct error message for invalid type', () => {
    const result = NameDotNumberSchema.safeParse(1.2);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toEqual('Enter a valid name.#');
  });
});
