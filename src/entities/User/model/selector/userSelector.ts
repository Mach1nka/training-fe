import { StateSchema } from '@/shared/config/reduxConfig/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
