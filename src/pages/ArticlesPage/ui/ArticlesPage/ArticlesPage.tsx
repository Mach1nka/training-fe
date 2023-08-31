import type { FC } from 'react';
import { memo, useCallback } from 'react';

import { WallOfArticles, fetchArticlesByPage } from '@/widgets/WallOfArticles';
import { Page } from '@/shared/ui/Page/Page';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';

const ArticlesPage: FC = memo(() => {
  const dispatch = useAppDispatch();

  const onLoadNextArticlesPage = useCallback(() => {
    thunkMiddleware(() => dispatch(fetchArticlesByPage()));
  }, []);

  return (
    <Page onScrollEnd={onLoadNextArticlesPage}>
      <WallOfArticles />
    </Page>
  );
});

export default ArticlesPage;
