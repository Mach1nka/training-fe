import type { FC } from 'react';
import { memo, useCallback } from 'react';

import { WallOfArticles, fetchArticlesByPage } from '@/widgets/WallOfArticles';
import { InfiniteScrollPage } from '@/features/UICondition';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';

const ArticlesPage: FC = memo(() => {
  const dispatch = useAppDispatch();

  const onLoadNextArticlesPage = useCallback(() => {
    thunkMiddleware(() => dispatch(fetchArticlesByPage()));
  }, [dispatch]);

  return (
    <InfiniteScrollPage onScrollEndPage={onLoadNextArticlesPage}>
      <WallOfArticles />
    </InfiniteScrollPage>
  );
});

export default ArticlesPage;
