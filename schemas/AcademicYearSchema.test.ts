import {
  ACADEMIC_YEAR_OPTIONS,
  AcademicYearSchema,
} from '@/schemas/AcademicYearSchema';

describe('ACADEMIC_YEAR_OPTIONS', () => {
  it('matches the latest snapshot', () => {
    expect(ACADEMIC_YEAR_OPTIONS).toMatchSnapshot();
  });
});

describe('AcademicYearSchema', () => {
  it('parses valid academic years', () => {
    expect(AcademicYearSchema.parse('High School')).toBe('High School');
    expect(AcademicYearSchema.parse('1st Year (Freshman)')).toBe(
      '1st Year (Freshman)',
    );
    expect(AcademicYearSchema.parse('2nd Year (Sophomore)')).toBe(
      '2nd Year (Sophomore)',
    );
    expect(AcademicYearSchema.parse('3rd Year (Junior)')).toBe(
      '3rd Year (Junior)',
    );
    expect(AcademicYearSchema.parse('4th Year (Senior)')).toBe(
      '4th Year (Senior)',
    );
    expect(AcademicYearSchema.parse('5th+ Year (Super Senior)')).toBe(
      '5th+ Year (Super Senior)',
    );
  });

  it('throws an error for invalid academic years', () => {
    expect(() => AcademicYearSchema.parse('invalid')).toThrow();
    expect(() => AcademicYearSchema.parse('')).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => AcademicYearSchema.parse(123)).toThrow();
    expect(() => AcademicYearSchema.parse({})).toThrow();
    expect(() => AcademicYearSchema.parse([])).toThrow();
    expect(() => AcademicYearSchema.parse(null)).toThrow();
    expect(() => AcademicYearSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = AcademicYearSchema.safeParse('invalid');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid academic year');
  });

  it('throws the correct error message for valid type', () => {
    const result = AcademicYearSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid academic year');
  });
});
