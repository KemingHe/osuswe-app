import { z } from 'zod';

import {
  NONEMPTY_SELECTION_ERROR_MESSAGE,
  UNIQUE_VALUES_ERROR_MESSAGE,
} from '@/constants/zodMessageConstants';
import { AcademicYearSchema } from '@/schemas/AcademicYearSchema';
import { CTROptionSchema } from '@/schemas/CTROptionSchema';
import { IdentityGroupSchema } from '@/schemas/IdentityGroupSchema';
import { MajorSchema } from '@/schemas/MajorSchema';
import { PronounSchema } from '@/schemas/PronounSchema';

const nameMaxChars: number = 255;
const majorMaxOptions: number = 3;
const isArrayOfUniqueValues = (values: string[]) =>
  new Set(values).size === values.length;

export const ProfileFormFieldsSchema = z.object(
  // biome-ignore format: added alignment for clarity.
  {
    firstName: z
      .string({ message: 'Enter a valid first name' })
      .min(1, { message: 'First name cannot be empty' })
      .max(nameMaxChars, { message: `First name is over ${nameMaxChars} chars` }),
    lastName: z
      .string({ message: 'Enter a valid last name' })
      .min(1, { message: 'Last name cannot be empty' })
      .max(nameMaxChars, { message: `Last name is over ${nameMaxChars} chars` }),
    pronounArray: z
      .array(PronounSchema)
      .nonempty({ message: NONEMPTY_SELECTION_ERROR_MESSAGE })
      .refine(isArrayOfUniqueValues, { message: UNIQUE_VALUES_ERROR_MESSAGE }),
    academicYear: AcademicYearSchema,
    majorArray: z
      .array(MajorSchema)
      .nonempty({ message: NONEMPTY_SELECTION_ERROR_MESSAGE })
      .max(majorMaxOptions, { message: `Select at most ${majorMaxOptions} majors` })
      .refine(isArrayOfUniqueValues, { message: UNIQUE_VALUES_ERROR_MESSAGE }),
    ctrOption: CTROptionSchema,
    identityGroupArray: z
      .array(IdentityGroupSchema)
      .nonempty({ message: NONEMPTY_SELECTION_ERROR_MESSAGE })
      .refine(isArrayOfUniqueValues, { message: UNIQUE_VALUES_ERROR_MESSAGE }),
},
);

export type ProfileFormFields = z.infer<typeof ProfileFormFieldsSchema>;
