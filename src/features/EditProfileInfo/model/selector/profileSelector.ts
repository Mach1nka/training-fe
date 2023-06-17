import { StateSchema } from '@/shared/config/redux/types';

const getProfileData = (state: StateSchema) => state.profile?.data;

const getProfileForm = (state: StateSchema) => state.profile?.form;

const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false;

const getProfileError = (state: StateSchema) => state.profile?.error;

const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

const getProfileValidateError = (state: StateSchema) => state.profile?.validateErrors;

export {
  getProfileData,
  getProfileForm,
  getProfileLoading,
  getProfileError,
  getProfileReadonly,
  getProfileValidateError,
};
