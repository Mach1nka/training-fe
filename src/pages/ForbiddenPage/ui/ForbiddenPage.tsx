import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

export const ForbiddenPage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <Text theme={TextTheme.ERROR} title={t('forbiddenPage')} />
    </Page>
  );
});

export default ForbiddenPage;
