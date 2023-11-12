import type { FC, ReactElement, SVGProps } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

export type IconTheme = 'primary' | 'secondary' | 'inverted';

interface Props {
  className?: string;
  theme?: IconTheme;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
}

export const Icon: FC<Props> = memo(({ className, theme = 'primary', Svg }) => (
  <Svg className={classNames(cls.Icon, {}, [className, cls[theme]])} />
));
