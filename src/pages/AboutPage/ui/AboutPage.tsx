import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page/Page';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Page data-testid="AboutPage">{t('title')}</Page>;
};

export default AboutPage;
