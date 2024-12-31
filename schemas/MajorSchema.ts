import { z } from 'zod';

export const MAJOR_OPTIONS: string[] = [
  'Aerospace Engineering',
  'Aviation',
  'Biomedical Engineering',
  'Chemical Engineering',
  'Civil Engineering',
  'Computer Science and Engineering',
  'Electrical and Computer Engineering',
  'Engineering Physics',
  'Engineering Technology',
  'Environmental Engineering',
  'Food, Agricultural, and Biological Engineering',
  'Industrial and Systems Engineering',
  'Materials Science and Engineering',
  'Mechanical Engineering',
  'Welding Engineering',
  'Undecided',
  'Architecture',
  'Other',
];
const majorErrorMessage: string = 'Invalid major selection';
const isValidMajor = (value: string): boolean => MAJOR_OPTIONS.includes(value);

export const MajorSchema = z
  .string({ message: majorErrorMessage })
  .refine(isValidMajor, { message: majorErrorMessage });

export type Major = z.infer<typeof MajorSchema>;
