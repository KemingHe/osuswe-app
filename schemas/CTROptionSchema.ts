import { z } from 'zod';

export const CTR_OPTIONS: string[] = [
  'I am a regional campus student',
  'I am a transfer student',
  'I am a commuter student',
  'I am a Columbus State Community College student',
  'I am none of the above',
];
const ctrErrorMessage: string = 'Invalid CTR selection';
const isValidCTROption = (value: string): boolean =>
  CTR_OPTIONS.includes(value);

export const CTROptionSchema = z
  .string({ message: ctrErrorMessage })
  .refine(isValidCTROption, { message: ctrErrorMessage });

export type CTROption = z.infer<typeof CTROptionSchema>;
