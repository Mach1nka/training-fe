import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('title')}
    </Page>
  );
};

export default MainPage;
