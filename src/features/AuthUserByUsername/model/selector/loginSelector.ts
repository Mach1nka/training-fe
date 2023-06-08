import { StateSchema } from '@/shared/config/redux/types';

export const getLoginUsername = (state: StateSchema) => state.loginForm?.username || '';

export const getLoginPassword = (state: StateSchema) => state.loginForm?.password || '';

export const getLoginLoading = (state: StateSchema) => state.loginForm?.isLoading || false;

export const getLoginError = (state: StateSchema) => state.loginForm?.error || '';
