import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

const AdminPanelPage: FC = memo(() => {
  const { t } = useTranslation('adminPanel');

  return (
    <Page>
      {t('title')}
    </Page>
  );
});

export default AdminPanelPage;
