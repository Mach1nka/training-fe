import type { StateSchema } from '@/shared/config/redux/types';

export const getLoginUsername = (state: StateSchema) => state.loginForm?.username ?? '';

export const getLoginPassword = (state: StateSchema) => state.loginForm?.password ?? '';

export const getLoginLoading = (state: StateSchema) => Boolean(state.loginForm?.isLoading);

export const getLoginError = (state: StateSchema) => state.loginForm?.error;
