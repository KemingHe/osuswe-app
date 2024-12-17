import isNonEmptyString from '@/utils/isNonEmptyString';

describe('isNonEmptyString', () => {
  it('returns true for non-empty strings', () => {
    expect(isNonEmptyString('hello')).toBe(true);
    expect(isNonEmptyString('  hello  ')).toBe(true);
  });

  it('returns false for empty strings', () => {
    expect(isNonEmptyString('')).toBe(false);
    expect(isNonEmptyString('  ')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isNonEmptyString(123)).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
    expect(isNonEmptyString(undefined)).toBe(false);
    expect(isNonEmptyString({})).toBe(false);
  });
});
