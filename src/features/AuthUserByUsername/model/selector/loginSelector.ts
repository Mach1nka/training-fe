import { StateSchema } from '@/shared/config/reduxConfig/StateSchema';

export const getLoginState = (state: StateSchema) => state?.loginForm;
