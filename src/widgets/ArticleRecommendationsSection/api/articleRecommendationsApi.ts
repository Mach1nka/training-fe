import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const { useFetchArticleRecommendationsQuery } = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleRecommendations: build.query<Article[], void>({
      query: () => ({
        url: '/articles',
        params: {
          _limit: 4,
          _expand: 'user',
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export { useFetchArticleRecommendationsQuery };
