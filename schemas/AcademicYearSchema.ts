import { z } from 'zod';

export const ACADEMIC_YEAR_OPTIONS: string[] = [
  'High School',
  '1st Year (Freshman)',
  '2nd Year (Sophomore)',
  '3rd Year (Junior)',
  '4th Year (Senior)',
  '5th+ Year (Super Senior)',
];
const academicYearErrorMessage: string = 'Invalid academic year';
const isValidAcademicYear = (value: string): boolean =>
  ACADEMIC_YEAR_OPTIONS.includes(value);

export const AcademicYearSchema = z
  .string({ message: academicYearErrorMessage })
  .refine(isValidAcademicYear, { message: academicYearErrorMessage });

export type AcademicYear = z.infer<typeof AcademicYearSchema>;
