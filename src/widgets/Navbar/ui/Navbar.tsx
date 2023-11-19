import type { FC } from 'react';
import {
  useState, useCallback, memo, Suspense,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { NotificationButton } from '@/features/ShowNotifications';
import { LoginModal } from '@/features/AuthUserByUsername';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getUserAuthData } from '@/entities/User';
import { Flex } from '@/shared/ui/Flex/Flex';
import { AccountActions } from '@/features/ShowAccountActions';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])} data-testid="Navbar">
        <Text className={cls.appName} theme={TextTheme.INVERTED} title={t('appName')} />
        <Flex justify="flex-end" align="center" gap={16}>
          <Suspense fallback={null}>
            <NotificationButton />
          </Suspense>
          <AccountActions avatar={authData.avatar} />
        </Flex>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])} data-testid="Navbar">
      <Text className={cls.appName} theme={TextTheme.INVERTED} title={t('appName')} />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
        data-testid="Navbar.login"
      >
        {t('header.login')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
    </header>
  );
});
