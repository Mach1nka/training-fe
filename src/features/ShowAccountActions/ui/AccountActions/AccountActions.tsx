import { memo, useMemo, useCallback } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { isUserAdmin, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/constant/router';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { ButtonForwardedRef, ButtonTheme } from '@/shared/ui/Button/Button';
import { Menu } from '@/shared/ui/Popups';
import type { DropdownItem } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

import cls from './AccountActions.module.scss';

interface Props {
  avatar: string | undefined;
}

export const AccountActions: FC<Props> = memo(({ avatar }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  const menuOptions = useMemo<DropdownItem[]>(
    () => [
      ...(isAdmin
        ? [
            {
              content: t('header.adminPanel'),
              href: RoutePath.adminPanel(),
            },
          ]
        : []),
      {
        content: t('header.createArticle'),
        href: RoutePath.articleCreate(),
      },
      {
        content: t('header.logout'),
        onClick: onLogout,
        'data-testid': 'AccountActions.logout',
      },
    ],
    [isAdmin, t, onLogout],
  );

  return (
    <Menu
      label={
        <ButtonForwardedRef
          className={cls.menuTrigger}
          theme={ButtonTheme.CLEAR}
          data-testid="AccountActions"
        >
          <Avatar src={avatar} size={30} fallbackTheme="inverted" />
        </ButtonForwardedRef>
      }
      directionH="right"
      options={menuOptions}
    />
  );
});
