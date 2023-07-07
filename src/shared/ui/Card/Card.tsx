import { FC, HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: FC<Props> = ({ className, children }) => (
  <div className={classNames(cls.Card, {}, [className])}>
    {children}
  </div>
);
