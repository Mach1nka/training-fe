export const thunkMiddleware = (asyncThunk: () => void) => {
  if (PROJECT !== 'storybook' && PROJECT !== 'jest') {
    asyncThunk();
  }
};
