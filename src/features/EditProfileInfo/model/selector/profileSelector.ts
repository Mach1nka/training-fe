import { StateSchema } from '@/shared/config/redux/types';

const getProfileData = (state: StateSchema) => state.profile?.data || undefined;

const getProfileForm = (state: StateSchema) => state.profile?.form || undefined;

const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false;

const getProfileError = (state: StateSchema) => state.profile?.error;

const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

export {
  getProfileData, getProfileForm, getProfileLoading, getProfileError, getProfileReadonly,
};
