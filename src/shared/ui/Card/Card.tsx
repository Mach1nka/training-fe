import { FC, HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
}

export const Card: FC<Props> = ({
  className, theme = CardTheme.NORMAL, children, ...props
}) => (
  <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...props}>
    {children}
  </div>
);
