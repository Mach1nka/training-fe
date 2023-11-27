import { memo, useState } from 'react';
import type { FC } from 'react';

import { Icon } from '@/shared/ui/Icon/Icon';
import { useHover } from '@/shared/hook/useHover';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';

import cls from './Rating.module.scss';

interface Props {
  className?: string;
  size?: number;
  value?: number;
  onChange: (rating: number) => void;
}

const ratingRange = [1, 2, 3, 4, 5] as const;

export const Rating: FC<Props> = memo(({
  className, size = 20, value, onChange,
}) => {
  const [hoveredItem, setHoveredItem] = useState(0);
  const [isHovered, { onMouseEnter, onMouseLeave }] = useHover();

  const onStarClick = (rating: number) => () => {
    onChange(rating);
  };

  const onHover = (rating: number) => () => {
    setHoveredItem(rating);
  };

  const mods = (rating: number) => ({
    [cls.hovered]: isHovered && rating <= hoveredItem,
    [cls.rated]: rating <= Number(value),
  });

  return (
    <div
      className={classNames(cls.Rating, {}, [className])}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {ratingRange.map((rate) => (
        <Icon
          key={rate}
          className={classNames(cls.star, mods(rate))}
          Svg={StarIcon}
          width={size}
          height={size}
          onClick={onStarClick(rate)}
          onMouseEnter={onHover(rate)}
        />
      ))}
    </div>
  );
});
