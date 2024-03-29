import type { FC, ReactElement, SVGProps } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import type { RTLProps } from '@/shared/types/common';

import cls from './Icon.module.scss';

export type IconTheme = 'primary' | 'secondary' | 'inverted';

interface Props extends SVGProps<SVGElement>, RTLProps {
  className?: string;
  theme?: IconTheme;
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
}

export const Icon: FC<Props> = memo(({ className, theme = 'primary', Svg, ...props }) => (
  <Svg className={classNames(cls.Icon, {}, [className, cls[theme]])} {...props} />
));
