import { Article, ArticleType, ArticleBlockType } from '@/entities/Article/model/types';

import { fetchArticleRecommendations } from '../service/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleRecommendationsSchema } from '../types';
import { articleRecommendationsReducer } from './articleRecommendationsSlice';

describe('articleRecommendationsSlice extra reducers', () => {
  const article: Article = {
    id: '2',
    user: {
      id: '2',
      username: 'admin',
    },
    title: 'Kotlin - язык программирования',
    subtitle: 'Краткий пересказ всего Kotlin',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    views: 10,
    createdAt: '20.05.2022',
    type: [ArticleType.IT],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
    ],
  };

  const state: DeepPartial<ArticleRecommendationsSchema> = {
    data: [],
    isLoading: false,
    error: undefined,
  };

  test('fetchArticleRecommendations fulfilled', () => {
    const response: Article[] = [article];

    expect(articleRecommendationsReducer(state as ArticleRecommendationsSchema, fetchArticleRecommendations.fulfilled(response, '', undefined)))
      .toEqual({
        data: [article],
        isLoading: false,
        error: undefined,
      });
  });
});
