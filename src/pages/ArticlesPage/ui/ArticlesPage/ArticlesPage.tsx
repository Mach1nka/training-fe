import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from '@/entities/Article';

const ArticlesPage: FC = memo(() => {
  const { t } = useTranslation('articles');

  return (
    <div>
      <ArticleList
        isLoading={false}
        view={ArticleView.LIST}
        articles={[]}
      />
    </div>
  );
});

export default ArticlesPage;
