import { rtkApi } from '@/shared/api/rtkApi';

import type { Notification } from '../model/types';

const { useFetchNotificationsQuery } = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchNotifications: build.query<Notification[], void>({
      query: () => ({
        url: '/notifications',
        params: {
          _limit: 4,
          // _expand: 'user',
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export { useFetchNotificationsQuery };
