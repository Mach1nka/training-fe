import { Comment } from '@/entities/Comment';
import { rtkApi } from '@/shared/api/rtkApi';

interface AddCommentBody {
  userId: string,
  articleId: string,
  text: string,
}

const { useFetchArticleCommentsQuery, useAddArticleCommentMutation } = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchArticleComments: build.query<Comment[], string>({
      query: (articleId) => ({
        url: '/comments',
        params: {
          articleId,
          _expand: 'user',
        },
      }),
      providesTags: ['ArticleComments'],
    }),
    addArticleComment: build.mutation<Comment, AddCommentBody>({
      query: (body) => ({
        method: 'POST',
        url: '/comments',
        body,
      }),
      invalidatesTags: ['ArticleComments'],
    }),
  }),
  overrideExisting: false,
});

export { useFetchArticleCommentsQuery, useAddArticleCommentMutation };
