import type { StateSchema } from '@/app/providers/StoreProvider';

const getProfileData = (state: StateSchema) => state.profile?.data;

const getProfileChangePermission = (state: StateSchema) =>
  state.profile?.data?.userId === state.user.authData?.id;

const getProfileForm = (state: StateSchema) => state.profile?.form;

const getProfileLoading = (state: StateSchema) => Boolean(state.profile?.isLoading);

const getProfileError = (state: StateSchema) => state.profile?.error;

const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

const getProfileValidateError = (state: StateSchema) => state.profile?.validateErrors;

export {
  getProfileChangePermission,
  getProfileData,
  getProfileForm,
  getProfileLoading,
  getProfileError,
  getProfileReadonly,
  getProfileValidateError,
};
