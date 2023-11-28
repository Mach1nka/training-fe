import { rtkApi } from '@/shared/api/rtkApi';

import type { ArticleRating } from '../types';

interface FetchRatingArgs {
  userId: string;
  articleId: string;
}

interface RateArticleArgs {
  userId: string;
  articleId: string;
  rating: number;
  feedback?: string;
}

const { useFetchArticleRatingQuery, useRateArticleMutation } = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleRating: build.query<ArticleRating[], FetchRatingArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
          // _expand: 'user',
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: ({
        userId, articleId, rating, feedback,
      }) => ({
        url: '/article-ratings',
        method: 'POST',
        body: {
          articleId,
          userId,
          rating,
          feedback: feedback || '',
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export { useFetchArticleRatingQuery, useRateArticleMutation };
