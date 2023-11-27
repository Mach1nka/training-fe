import { memo } from 'react';
import type { FC } from 'react';

import { detectDevice } from '@/shared/lib/detectDevise/detectDevise';

import { NotificationButtonMobile } from './Mobile/NotificationButtonMobile.lazy';
import { NotificationButtonDesktop } from './Desktop/NotificationButtonDesktop.lazy';

const isMobile = detectDevice();

export const NotificationButton: FC = memo(() => {
  if (isMobile) {
    return (
      <NotificationButtonMobile />
    );
  }

  return (
    <NotificationButtonDesktop />
  );
});
