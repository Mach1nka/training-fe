import {
  FC, useState, useCallback, memo, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonForwardedRef, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthUserByUsername';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getUserAuthData, isUserAdmin, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { DropdownItem, Menu } from '@/shared/ui/Menu/Menu';
import { Avatar } from '@/shared/ui/Avatar/Avatar';

import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  const menuOptions = useMemo<DropdownItem[]>(() => ([
    ...(isAdmin ? [{
      content: t('header.adminPanel'),
      href: RoutePath.adminPanel,
    }] : []),
    {
      content: t('header.createArticle'),
      href: RoutePath.articleCreate,
    },
    {
      content: t('header.logout'),
      onClick: onLogout,
    },
  ]), [isAdmin, onLogout]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} theme={TextTheme.INVERTED} title={t('appName')} />
        <Menu
          label={(
            <ButtonForwardedRef className={cls.menuButton} theme={ButtonTheme.CLEAR}>
              <Avatar src={authData.avatar || DefaultImage} size={30} />
            </ButtonForwardedRef>
          )}
          directionH="right"
          options={menuOptions}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.link}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('header.login')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
    </header>
  );
});
