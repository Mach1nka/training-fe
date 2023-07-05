import {
  FC, memo, useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';

import { getSidebarItemsList } from '../../model/selector/sidebarItemsSelector';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface Props {
  className?: string;
}

export const Sidebar: FC<Props> = memo(({ className }) => {
  const sidebarItemList = useSelector(getSidebarItemsList);
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.LARGE}
        square
        className={cls.collapseBtn}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classNames(cls.items)}>
        {sidebarItemList.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
