import type { FC } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { ArticleView } from '@/entities/Article';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './ViewSwitcher.module.scss';

const viewOptions = [
  {
    icon: TileIcon,
    view: ArticleView.TILE,
  },
  {
    icon: ListIcon,
    view: ArticleView.LIST,
  },
];

interface Props {
  className?: string;
  view: ArticleView;
  onChangeView: (newView: ArticleView) => void;
}

export const ViewSwitcher: FC<Props> = memo(({ className, view, onChangeView }) => {
  const onClick = (newView: ArticleView) => () => {
    onChangeView(newView);
  };

  return (
    <div className={classNames('', {}, [className])}>
      {viewOptions.map((option, idx) => (
        <Button key={idx} theme={ButtonTheme.CLEAR} onClick={onClick(option.view)}>
          <Icon
            Svg={option.icon}
            className={classNames(cls.icon, { [cls.selected]: option.view === view })}
          />
        </Button>
      ))}
    </div>
  );
});
