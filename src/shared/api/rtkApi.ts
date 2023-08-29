import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LOCAL_STORAGE_USER_KEY } from '../constant/localstorage';

export const rtkApi = createApi({
  reducerPath: 'api',
  tagTypes: ['ArticleComments'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '');

      return headers;
    },
  }),
  endpoints: () => ({}),
});
