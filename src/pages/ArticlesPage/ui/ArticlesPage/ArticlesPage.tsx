import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { WallOfArticles, fetchPageOfArticles } from '@/widgets/WallOfArticles';
import { Page } from '@/shared/ui/Page/Page';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

const ArticlesPage: FC = memo(() => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const onLoadNextArticlesPage = useCallback(() => {
    dispatch(fetchPageOfArticles());
  }, []);

  return (
    <Page onScrollEnd={onLoadNextArticlesPage}>
      <WallOfArticles />
    </Page>
  );
});

export default ArticlesPage;
