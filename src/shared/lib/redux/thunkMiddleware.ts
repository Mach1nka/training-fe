export const thunkMiddleware = (asyncThunk: () => void) => {
  if (PROJECT !== 'storybook') {
    asyncThunk();
  }
};
