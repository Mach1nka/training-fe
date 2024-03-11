import { memo } from 'react';
import type { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';

import cls from './NotificationItem.module.scss';

interface Props {
  className?: string;
  title: string;
  description: string;
  href?: string;
}

export const NotificationItem: FC<Props> = memo(({ className, title, description, href }) => {
  const content = (
    <Card
      theme={CardTheme.OUTLINE}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text size={TextSize.SMALL} title={title} text={description} />
    </Card>
  );

  if (href) {
    return (
      <AppLink className={cls.link} underline={AppLinkUnderline.NEVER} to={href}>
        {content}
      </AppLink>
    );
  }

  return content;
});
