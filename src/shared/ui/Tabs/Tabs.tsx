import type { FC } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem {
  label: string;
  value: string;
}

interface Props {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (value: string) => void;
}

export const Tabs: FC<Props> = memo(({ className, tabs, value, onTabClick }) => {
  const onClick = (tab: string) => () => {
    onTabClick(tab);
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          onClick={onClick(tab.value)}
        >
          {tab.label}
        </Card>
      ))}
    </div>
  );
});
