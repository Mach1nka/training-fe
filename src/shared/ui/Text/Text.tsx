import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface Props {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<Props> = ({
  className, title, text, theme = TextTheme.PRIMARY,
}) => (
  <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
    {title ? <p className={cls.title}>{title}</p> : null}
    {text ? <p className={cls.text}>{text}</p> : null}
  </div>
);
