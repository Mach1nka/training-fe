import { memo } from 'react';
import type { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface Props {
  className?: string;
  onClick?: () => void;
}

export const Overlay: FC<Props> = memo(({ className, onClick }) => (
  <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
));
