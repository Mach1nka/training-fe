import { FC, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthUserByUsername';
import { getUserAuthData, userActions } from '@/entities/User';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
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
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          className={cls.links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('login')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
    </div>
  );
};
