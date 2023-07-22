import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left'
}

export enum TextSize {
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: FC<Props> = memo(({
  className, title, text, size = TextSize.MEDIUM, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
}) => (
  <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
    {title ? <p className={cls.title}>{title}</p> : null}
    {text ? <p className={cls.text}>{text}</p> : null}
  </div>
));
