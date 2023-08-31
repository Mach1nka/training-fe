import type { FC } from 'react';
import { useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface Props {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<Props> = memo(({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggle = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }, []);

  return (
    <Button theme={ButtonTheme.CLEAR} className={className} onClick={toggle}>
      {t(short ? 'langSwitcher.shortLang' : 'langSwitcher.lang')}
    </Button>
  );
});

// TODO: add story after integration i18n into SB
