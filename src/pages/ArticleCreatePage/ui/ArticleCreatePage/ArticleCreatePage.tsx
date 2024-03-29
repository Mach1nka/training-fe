import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

const ArticleCreatePage: FC = () => {
  const { t } = useTranslation();

  return <Page>{t('createPage')}</Page>;
};

export default ArticleCreatePage;
