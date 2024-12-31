import { PRONOUN_OPTIONS, PronounSchema } from '@/schemas/PronounSchema';

describe('PRONOUN_OPTIONS', () => {
  it('matches the latest snapshot', () => {
    expect(PRONOUN_OPTIONS).toMatchSnapshot();
  });
});

describe('PronounSchema', () => {
  it('parses valid pronouns', () => {
    expect(PronounSchema.parse('he/him')).toBe('he/him');
    expect(PronounSchema.parse('she/her')).toBe('she/her');
    expect(PronounSchema.parse('they/them')).toBe('they/them');
    expect(PronounSchema.parse('ze/zir')).toBe('ze/zir');
    expect(PronounSchema.parse('other')).toBe('other');
    expect(PronounSchema.parse('prefer not to say')).toBe('prefer not to say');
  });

  it('throws an error for invalid pronouns', () => {
    expect(() => PronounSchema.parse('invalid')).toThrow();
    expect(() => PronounSchema.parse('')).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => PronounSchema.parse(123)).toThrow();
    expect(() => PronounSchema.parse({})).toThrow();
    expect(() => PronounSchema.parse([])).toThrow();
    expect(() => PronounSchema.parse(null)).toThrow();
    expect(() => PronounSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = PronounSchema.safeParse('invalid');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid pronoun');
  });

  it('throws the correct error message for valid type', () => {
    const result = PronounSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid pronoun');
  });
});
