import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface Props {
  className?: string;
}

export const PageError: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('errorBoundary.title')}</p>
      <Button onClick={reloadPage}>{t('errorBoundary.button')}</Button>
    </div>
  );
};
