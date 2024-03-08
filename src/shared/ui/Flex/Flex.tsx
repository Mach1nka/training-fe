import type { FC, CSSProperties, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import type { RTLProps } from '@/shared/types/common';

import cls from './Flex.module.scss';

type Justify = Extract<
  CSSProperties['justifyContent'],
  'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
>;
type Align = Extract<
  CSSProperties['alignItems'],
  'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
>;
type Direction = Extract<CSSProperties['flexDirection'], 'row' | 'column'>;
type Wrap = Extract<CSSProperties['flexWrap'], 'wrap' | 'nowrap'>;
type Gap = 4 | 8 | 12 | 16 | 20 | 32;

interface Props extends PropsWithChildren, RTLProps {
  className?: string;
  justify?: Justify;
  align?: Align;
  direction?: Direction;
  wrap?: Wrap;
  isGrown?: boolean;
  gap?: Gap;
}

export const Flex: FC<Props> = ({
  className,
  justify = 'flex-start',
  align,
  direction = 'row',
  wrap = 'nowrap',
  gap,
  isGrown = true,
  children,
  'data-testid': dataTestId = '',
}) => {
  const classes = {
    justify,
    align,
    direction,
    wrap,
    gap,
  };

  const mods = {
    [cls.grow]: isGrown,
  };

  return (
    <div
      data-testid={dataTestId}
      className={
        classNames(
          cls.Flex,
          mods,
          [
            Object.entries(classes).map(([key, value]) => cls[`${key}_${value}`]).join(' '),
            className,
          ],
        )
      }
    >
      {children}
    </div>
  );
};
