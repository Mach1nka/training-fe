import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

const ArticleEditPage: FC = () => {
  const { t } = useTranslation();

  return <Page>{t('editPage')}</Page>;
};

export default ArticleEditPage;
