import {
  FC, useState, useCallback, memo,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthUserByUsername';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getUserAuthData, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
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

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} theme={TextTheme.INVERTED} title={t('appName')} />
        <AppLink underline={AppLinkUnderline.NONE} to={RoutePath.articleCreate}>
          <Button theme={ButtonTheme.CLEAR_INVERTED}>
            {t('header.createArticle')}
          </Button>
        </AppLink>
        <Button
          className={cls.links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('header.logout')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('header.login')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
    </header>
  );
});
