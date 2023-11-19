import { memo, useCallback, useState } from 'react';
import type { FC } from 'react';

import { NotificationList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import BellIcon from '@/shared/assets/icons/bell.svg';

import cls from './NotificationButtonMobile.module.scss';

const NotificationButtonMobile: FC = memo(() => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  return (
    <>
      <Button
        onClick={onOpenDrawer}
        theme={ButtonTheme.CLEAR}
        className={cls.popoverTrigger}
        data-testid="Notification"
      >
        <Icon theme="inverted" Svg={BellIcon} />
      </Button>
      <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
        <NotificationList />
      </Drawer>
    </>
  );
});

export default NotificationButtonMobile;
