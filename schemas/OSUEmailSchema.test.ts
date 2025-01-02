import { OSUEmailSchema } from '@/schemas/OSUEmailSchema';

describe('NameDotNumberSchema', () => {
  it('parses valid name dot numbers without error', () => {
    expect(OSUEmailSchema.parse('buckeye.1@osu.edu')).toBe('buckeye.1@osu.edu');
    expect(OSUEmailSchema.parse('buck-eye.123@osu.edu')).toBe(
      'buck-eye.123@osu.edu',
    );
    expect(OSUEmailSchema.parse('bu-ck-eye.1@osu.edu')).toBe(
      'bu-ck-eye.1@osu.edu',
    );
  });

  it('throws an error for invalid name dot numbers', () => {
    expect(() => OSUEmailSchema.parse('')).toThrow();
    expect(() => OSUEmailSchema.parse('buckeye@osu.edu')).toThrow();
    expect(() => OSUEmailSchema.parse('buckeye.0@osu.edu')).toThrow();
    expect(() => OSUEmailSchema.parse('buckeye.1.2@osu.edu')).toThrow();
  });

  it('throws an error for non-string values', () => {
    expect(() => OSUEmailSchema.parse(1)).toThrow();
    expect(() => OSUEmailSchema.parse({})).toThrow();
    expect(() => OSUEmailSchema.parse([])).toThrow();
    expect(() => OSUEmailSchema.parse(null)).toThrow();
    expect(() => OSUEmailSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = OSUEmailSchema.safeParse('buckeye.0@osu.edu');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toEqual(
      'Enter a valid @osu.edu email',
    );
  });

  it('throws the correct error message for invalid type', () => {
    const result = OSUEmailSchema.safeParse(1.2);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toEqual(
      'Enter a valid @osu.edu email',
    );
  });
});
