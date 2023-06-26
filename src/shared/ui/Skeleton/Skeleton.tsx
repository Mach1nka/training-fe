import { CSSProperties, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface Props {
  className?: string;
  width: string | number;
  height: string | number;
  borderRadius?: string;
}

export const Skeleton: FC<Props> = ({
  className, width, height, borderRadius,
}) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={style} />
  );
};
