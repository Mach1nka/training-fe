import { memo } from 'react';
import type { FC } from 'react';

import { detectDevice } from '@/shared/lib/detectDevise/detectDevise';

import { NotificationButtonMobile } from './Mobile/NotificationButtonMobile.lazy';
import { NotificationButtonDesktop } from './Desktop/NotificationButtonDesktop.lazy';

export const NotificationButton: FC = memo(() => {
  const isMobile = detectDevice();

  if (isMobile) {
    return (
      <NotificationButtonMobile />
    );
  }

  return (
    <NotificationButtonDesktop />
  );
});
