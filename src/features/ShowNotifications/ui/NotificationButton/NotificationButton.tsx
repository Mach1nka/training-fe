import { memo } from 'react';
import type { FC } from 'react';

import { NotificationList } from '@/entities/Notification';
import { ButtonForwardedRef, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import BellIcon from '@/shared/assets/icons/bell.svg';

import cls from './NotificationButton.module.scss';

const NotificationButton: FC = memo(() => (
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
));

export default NotificationButton;
