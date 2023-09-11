import { memo, useCallback, useState } from 'react';
import type { FC } from 'react';

import { NotificationList } from '@/entities/Notification';
import { ButtonForwardedRef, Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import { useDetectDevice } from '@/shared/hook/useDetectDevise';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import BellIcon from '@/shared/assets/icons/bell.svg';

import cls from './NotificationButton.module.scss';

const NotificationButton: FC = memo(() => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const isMobile = useDetectDevice();

  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  if (isMobile) {
    return (
      <div>
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR} className={cls.popoverTrigger}>
          <Icon theme="inverted" Svg={BellIcon} />
        </Button>
        <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </div>
    );
  }

  return (
    <Popover
      directionH="right"
      unmount={false}
      label={(
        <ButtonForwardedRef theme={ButtonTheme.CLEAR} className={cls.popoverTrigger}>
          <Icon theme="inverted" Svg={BellIcon} />
        </ButtonForwardedRef>
      )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});

export default NotificationButton;
