import { zodResolver } from '@hookform/resolvers/zod';
import { type JSX, useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  type ProfileFormFields,
  ProfileFormFieldsSchema,
} from '@/components/profile/ProfileFormFieldsSchema';
// import { ProfileWireframe } from '@/components/profile/ProfileWireframe';

export interface ProfileWrapperProps {
  updateProfileServerAction: (data: ProfileFormFields) => Promise<void>;
}

export function ProfileWrapper({
  updateProfileServerAction,
}: ProfileWrapperProps): JSX.Element {
  // Form-level state and methods.
  const {
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    setFocus,
  } = useForm<ProfileFormFields>({
    criteriaMode: 'all',
    resolver: zodResolver(ProfileFormFieldsSchema),
  });
  // Handler-level state and methods.
  const [handlerErrored, setHandlerErrored] = useState<boolean>(false);

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
    return isSubmitSuccessful && !handlerErrored;
  }

  function isDisabled(): boolean {
    return isSubmitting || isProfileUpdated();
  }

  // ---------------------------------------------------------------------------
  // Auto-focus on the first input when:
  // - The form is first rendered.
  // - The form is submitted and the handler errored.
  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  return (
    // <ProfileWireframe
    //   isProfileUpdated={isProfileUpdated()}
    //   submitHandler={handleSubmit(updateProfileHandler)}
    //   register={register}
    //   errors={errors}
    //   isDisabled={isDisabled()}
    // />
    <div>ProfileWrapper</div>
  );
}
