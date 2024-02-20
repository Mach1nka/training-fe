import type { CSSProperties, FC } from 'react';
import { memo, useMemo } from 'react';

import type { IconTheme } from '@/shared/ui/Icon/Icon';
import { Icon } from '@/shared/ui/Icon/Icon';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.svg';

import cls from './Avatar.module.scss';

interface Props {
  className?: string;
  src: string | undefined;
  size: number;
  alt?: string;
  fallbackTheme?: IconTheme;
}

export const Avatar: FC<Props> = memo(({
  className, src, size, alt = 'avatar', fallbackTheme,
}) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = (
    <Skeleton width={size} height={size} borderRadius="50%" />
  );

  const errorFallback = (
    <Icon
      Svg={DefaultAvatar}
      className={classNames(cls.Avatar, {}, [className])}
      style={styles}
      theme={fallbackTheme}
    />
  );

  return (
    <AppImage
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={styles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
});
