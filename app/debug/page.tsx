'use client';

// import type { JSX } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type JSX, useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import Select, { type MultiValue } from 'react-select';
import { toast } from 'react-toastify';

import {
  type ProfileFormFields,
  ProfileFormFieldsSchema,
} from '@/components/profile/ProfileFormFieldsSchema';
import { ACADEMIC_YEAR_OPTIONS } from '@/schemas/AcademicYearSchema';
import { CTR_OPTIONS } from '@/schemas/CTROptionSchema';
import { IDENTITY_GROUP_OPTIONS } from '@/schemas/IdentityGroupSchema';
import { MAJOR_OPTIONS } from '@/schemas/MajorSchema';
import { PRONOUN_OPTIONS } from '@/schemas/PronounSchema';

function updateProfileServerAction(data: ProfileFormFields): Promise<void> {
  console.log('Updating profile with data:', data);
  return Promise.resolve();
}

export default function DebugPage(): JSX.Element {
  // Form-level state and methods.
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    setValue,
  } = useForm<ProfileFormFields>({
    criteriaMode: 'all',
    resolver: zodResolver(ProfileFormFieldsSchema),
  });
  // Handler-level state and methods.
  const [isHandlerErrored, setHandlerErrored] = useState<boolean>(false);

  // ---------------------------------------------------------------------------
  const updateProfileHandler: SubmitHandler<ProfileFormFields> = async (
    data: ProfileFormFields,
  ): Promise<void> => {
    setHandlerErrored(false);
    try {
      await updateProfileServerAction(data);
    } catch (error) {
      setHandlerErrored(true);
      console.error(error);
      toast.error('Server error. Please try again later.');
    }
  };

  function isProfileUpdated(): boolean {
    return isSubmitSuccessful && !isHandlerErrored;
  }

  function isDisabled(): boolean {
    return isSubmitting || isProfileUpdated();
  }

  useEffect(() => {
    if (errors) console.log('Errors:', errors);
  }, [errors]);

  return (
    <form
      className="flex flex-col justify-center gap-2"
      onSubmit={handleSubmit(updateProfileHandler)}
    >
      <label className="form-control" htmlFor="first-name-input">
        <span>First Name</span>
        <input
          {...register('firstName')}
          id="first-name-input"
          className="input input-primary"
          type="text"
          placeholder="Brutus"
          required
          aria-required="true"
        />
      </label>
      <label className="form-control" htmlFor="last-name-input">
        <span>Last Name</span>
        <input
          {...register('lastName')}
          id="last-name-input"
          className="input input-primary"
          type="text"
          placeholder="Buckeye"
          required
          aria-required="true"
        />
      </label>
      <label className="form-control" htmlFor="pronoun-select">
        <span>Pronouns</span>
        <Select
          {...register('pronounArray')}
          id="pronoun-select"
          isMulti
          options={PRONOUN_OPTIONS.map((option: string) => ({
            value: option,
            label: option,
          }))}
          onChange={(
            selectedOptions: MultiValue<{ label: string; value: string }>,
          ) => {
            setValue(
              'pronounArray',
              selectedOptions.map((selectedOption) => selectedOption.value) as [
                string,
                ...string[],
              ],
            );
          }}
        />
      </label>
      <label className="form-control" htmlFor="academic-year-select">
        <span>Academic Year</span>
        <select
          {...register('academicYear')}
          id="academic-year-select"
          className="select select-primary"
        >
          {ACADEMIC_YEAR_OPTIONS.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="form-control" htmlFor="major-select">
        <span>Majors</span>
        <Select
          {...register('majorArray')}
          id="major-select"
          isMulti
          options={MAJOR_OPTIONS.map((option: string) => ({
            value: option,
            label: option,
          }))}
          onChange={(
            selectedOptions: MultiValue<{ label: string; value: string }>,
          ) => {
            setValue(
              'majorArray',
              selectedOptions.map((selectedOption) => selectedOption.value) as [
                string,
                ...string[],
              ],
            );
          }}
        />
      </label>
      <label className="form-control" htmlFor="ctr-select">
        <span>CTR</span>
        <select
          {...register('ctrOption')}
          id="ctr-select"
          className="select select-primary"
        >
          {CTR_OPTIONS.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="form-control" htmlFor="identity-group-select">
        <span>Identity Groups</span>
        <Select
          {...register('identityGroupArray')}
          id="identity-group-select"
          isMulti
          options={IDENTITY_GROUP_OPTIONS.map((option: string) => ({
            value: option,
            label: option,
          }))}
          onChange={(
            selectedOptions: MultiValue<{ label: string; value: string }>,
          ) => {
            setValue(
              'identityGroupArray',
              selectedOptions.map((selectedOption) => selectedOption.value) as [
                string,
                ...string[],
              ],
            );
          }}
        />
      </label>
      <button className="btn btn-primary" type="submit" disabled={isDisabled()}>
        Submit
      </button>
    </form>
  );
}
