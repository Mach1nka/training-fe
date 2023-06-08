import { StateSchema } from '@/shared/config/redux/types';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
