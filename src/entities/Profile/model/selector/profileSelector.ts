import { StateSchema } from '@/shared/config/redux/types';

const getProfileData = (state: StateSchema) => state.profile?.data || undefined;

const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false;

const getProfileError = (state: StateSchema) => state.profile?.error || '';

export { getProfileData, getProfileLoading, getProfileError };
