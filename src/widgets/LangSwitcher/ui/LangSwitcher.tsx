import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const LangSwitcher: FC<Props> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={toggle}>
      {t('translate')}
    </Button>
  );
};
