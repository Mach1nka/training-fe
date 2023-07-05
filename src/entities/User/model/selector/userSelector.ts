import { StateSchema } from '@/shared/config/redux/types';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

export const getUserId = (state: StateSchema) => state.user.authData?.id;

export const getUserInitiated = (state: StateSchema) => state.user.initiated;
