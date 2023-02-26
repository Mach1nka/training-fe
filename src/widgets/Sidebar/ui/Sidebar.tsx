import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/vector.svg';
import AboutIcon from '@/shared/assets/icons/clarity_list-outline-badged.svg';

import cls from './Sidebar.module.scss';

interface Props {
  className?: string;
}

export const Sidebar: FC<Props> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
      <div className={classNames(cls.linksWrapper)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.link)}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.linkText}>{t('navigation.mainPage')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.link)}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.linkText}>{t('navigation.aboutPage')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
