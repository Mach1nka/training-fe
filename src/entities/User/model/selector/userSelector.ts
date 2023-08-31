import { createSelector } from '@reduxjs/toolkit';

import type { StateSchema } from '@/shared/config/redux/types';

import { UserRole } from '../const';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

export const getUserId = (state: StateSchema) => state.user.authData?.id;

export const getUserInitialized = (state: StateSchema) => Boolean(state.user.initialized);

export const getUserRole = (state: StateSchema) => state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRole, (roles) => roles?.includes(UserRole.ADMIN));
export const isUserManager = createSelector(getUserRole, (roles) => roles?.includes(UserRole.MANAGER));
