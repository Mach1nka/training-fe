import type { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => (
  <div className={classNames(cls.Loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
