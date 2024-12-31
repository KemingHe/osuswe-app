import { MAJOR_OPTIONS, MajorSchema } from '@/schemas/MajorSchema';

describe('MAJOR_OPTIONS', () => {
  it('matches the latest snapshot', () => {
    expect(MAJOR_OPTIONS).toMatchSnapshot();
  });
});

describe('MajorSchema', () => {
  it('parses valid majors', () => {
    expect(MajorSchema.parse('Aerospace Engineering')).toBe(
      'Aerospace Engineering',
    );
    expect(MajorSchema.parse('Aviation')).toBe('Aviation');
    expect(MajorSchema.parse('Biomedical Engineering')).toBe(
      'Biomedical Engineering',
    );
    expect(MajorSchema.parse('Chemical Engineering')).toBe(
      'Chemical Engineering',
    );
    expect(MajorSchema.parse('Civil Engineering')).toBe('Civil Engineering');
    expect(MajorSchema.parse('Computer Science and Engineering')).toBe(
      'Computer Science and Engineering',
    );
    expect(MajorSchema.parse('Electrical and Computer Engineering')).toBe(
      'Electrical and Computer Engineering',
    );
    expect(MajorSchema.parse('Engineering Physics')).toBe(
      'Engineering Physics',
    );
    expect(MajorSchema.parse('Engineering Technology')).toBe(
      'Engineering Technology',
    );
    expect(MajorSchema.parse('Environmental Engineering')).toBe(
      'Environmental Engineering',
    );
    expect(
      MajorSchema.parse('Food, Agricultural, and Biological Engineering'),
    ).toBe('Food, Agricultural, and Biological Engineering');
    expect(MajorSchema.parse('Industrial and Systems Engineering')).toBe(
      'Industrial and Systems Engineering',
    );
    expect(MajorSchema.parse('Materials Science and Engineering')).toBe(
      'Materials Science and Engineering',
    );
    expect(MajorSchema.parse('Mechanical Engineering')).toBe(
      'Mechanical Engineering',
    );
    expect(MajorSchema.parse('Welding Engineering')).toBe(
      'Welding Engineering',
    );
    expect(MajorSchema.parse('Undecided')).toBe('Undecided');
    expect(MajorSchema.parse('Architecture')).toBe('Architecture');
    expect(MajorSchema.parse('Other')).toBe('Other');
  });

  it('throws an error for invalid majors', () => {
    expect(() => MajorSchema.parse('invalid')).toThrow();
    expect(() => MajorSchema.parse('')).toThrow();
  });

  it('throws an error for invalid types', () => {
    expect(() => MajorSchema.parse(123)).toThrow();
    expect(() => MajorSchema.parse({})).toThrow();
    expect(() => MajorSchema.parse([])).toThrow();
    expect(() => MajorSchema.parse(null)).toThrow();
    expect(() => MajorSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = MajorSchema.safeParse('invalid');
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid major selection');
  });

  it('throws the correct error message for valid type', () => {
    const result = MajorSchema.safeParse(123);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe('Invalid major selection');
  });
});
