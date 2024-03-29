import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './[FTName].module.scss';

interface Props {
  className?: string;
}

export const [FTName]: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>

    </div>
  );
});
