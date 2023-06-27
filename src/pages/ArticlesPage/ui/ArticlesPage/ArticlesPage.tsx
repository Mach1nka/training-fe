import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: FC = memo(() => {
  const { t } = useTranslation('articles');

  return (
    <div />
  );
});

export default ArticlesPage;
