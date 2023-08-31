import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page className={cls.NotFoundPage}>
      {t('pageNotFound')}
    </Page>
  );
};

export default NotFoundPage;
