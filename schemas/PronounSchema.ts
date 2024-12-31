import { z } from 'zod';

export const PRONOUN_OPTIONS: string[] = [
  'he/him',
  'she/her',
  'they/them',
  'ze/zir',
  'other',
  'prefer not to say',
];
const pronounErrorMessage: string = 'Invalid pronoun';
const isValidPronoun = (value: string): boolean =>
  PRONOUN_OPTIONS.includes(value);

export const PronounSchema = z
  .string({ message: pronounErrorMessage })
  .refine(isValidPronoun, { message: pronounErrorMessage });

export type Pronoun = z.infer<typeof PronounSchema>;
