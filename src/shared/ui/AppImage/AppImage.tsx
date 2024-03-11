import { memo, useState, useLayoutEffect } from 'react';
import type { FC, ImgHTMLAttributes, ReactElement } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage: FC<Props> = memo(
  ({ className, src, alt = 'image', fallback, errorFallback, ...props }) => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    useLayoutEffect(() => {
      const img = new Image();
      img.src = src || '';

      img.onload = () => {
        setLoading(false);
      };
      img.onerror = () => {
        setError(true);
        setLoading(false);
      };
    }, [src]);

    if (isLoading && fallback) {
      return <>{fallback}</>;
    }

    if (hasError && errorFallback) {
      return <>{errorFallback}</>;
    }

    return <img className={className} src={src} alt={alt} {...props} />;
  },
);
