import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left'
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<Props> = memo(({
  className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
}) => (
  <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
    {title ? <p className={cls.title}>{title}</p> : null}
    {text ? <p className={cls.text}>{text}</p> : null}
  </div>
));
