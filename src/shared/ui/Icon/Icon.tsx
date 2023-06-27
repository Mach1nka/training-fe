import {
  FC, SVGProps, VFC, memo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface Props {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>
}

export const Icon: FC<Props> = memo(({ className, Svg }) => (
  <Svg className={classNames(cls.Icon, {}, [className])} />
));
