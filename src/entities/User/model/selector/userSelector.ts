import { StateSchema } from '@/shared/config/redux/types';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

export const getUserId = (state: StateSchema) => state.user.authData?.id;

export const getUserInitialized = (state: StateSchema) => Boolean(state.user.initialized);
