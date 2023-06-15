import {
  CSSProperties, FC, memo, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface Props {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<Props> = memo(({
  className, src, size, alt,
}) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={styles}
      alt={alt || 'avatar'}
    />
  );
});
