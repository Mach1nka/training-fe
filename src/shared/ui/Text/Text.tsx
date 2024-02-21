import type { FC } from 'react';
import { memo } from 'react';

import type { RTLProps } from '@/shared/types/common';
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
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type HeaderTagType = 'h3' | 'h4' | 'h5';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.SMALL]: 'h5',
  [TextSize.MEDIUM]: 'h4',
  [TextSize.LARGE]: 'h3',
};

interface Props extends RTLProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: FC<Props> = memo(({
  className,
  title,
  text,
  size = TextSize.MEDIUM,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  'data-testid': dataTestId = '',
}) => {
  const HeadingTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title
        ? (
          <HeadingTag data-testid={`${dataTestId}.heading`} className={cls.title}>
            {title}
          </HeadingTag>
        ) : null}
      {text ? <p data-testid={`${dataTestId}.paragraph`} className={cls.text}>{text}</p> : null}
    </div>
  );
});
