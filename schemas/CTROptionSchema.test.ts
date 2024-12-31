import { CTROptionSchema, CTR_OPTIONS } from '@/schemas/CTROptionSchema';

describe('CTR_OPTIONS', () => {
  it('matches the latest snapshot', () => {
    expect(CTR_OPTIONS).toMatchSnapshot();
  });
});

describe('CTROptionSchema', () => {
  it('parses valid CTR options', () => {
    expect(CTROptionSchema.parse('I am a regional campus student')).toBe(
      'I am a regional campus student',
    );
    expect(CTROptionSchema.parse('I am a transfer student')).toBe(
      'I am a transfer student',
    );
    expect(CTROptionSchema.parse('I am a commuter student')).toBe(
      'I am a commuter student',
    );
    expect(
      CTROptionSchema.parse('I am a Columbus State Community College student'),
    ).toBe('I am a Columbus State Community College student');
    expect(CTROptionSchema.parse('I am none of the above')).toBe(
      'I am none of the above',
    );
  });

  it('throws an error for invalid CTR options', () => {
    expect(() => CTROptionSchema.parse('invalid')).toThrow();
    expect(() => CTROptionSchema.parse('')).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => CTROptionSchema.parse(123)).toThrow();
    expect(() => CTROptionSchema.parse({})).toThrow();
    expect(() => CTROptionSchema.parse([])).toThrow();
    expect(() => CTROptionSchema.parse(null)).toThrow();
    expect(() => CTROptionSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = CTROptionSchema.safeParse('invalid');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid CTR selection');
  });

  it('throws the correct error message for valid type', () => {
    const result = CTROptionSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid CTR selection');
  });
});
