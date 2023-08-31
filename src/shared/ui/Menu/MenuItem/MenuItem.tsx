import type { FC } from 'react';
import { Fragment, memo } from 'react';
import { Menu as Dropdown } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLinkForwardedRef, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { ButtonForwardedRef, ButtonTheme } from '@/shared/ui/Button/Button';

import type { DropdownItem } from '../Menu';
import cls from './MenuItem.module.scss';

interface Props extends DropdownItem {
  className?: string;
}

export const MenuItem: FC<Props> = memo(({
  content, disabled, href, onClick,
}) => (
  <Dropdown.Item
    disabled={disabled}
    as={Fragment}
  >
    {({ active }) => {
      if (href) {
        return (
          <AppLinkForwardedRef
            to={href}
            onClick={onClick}
            underline={AppLinkUnderline.NONE}
            className={classNames(cls.item, { [cls.active]: active })}
          >
            {content}
          </AppLinkForwardedRef>
        );
      }

      return (
        <ButtonForwardedRef
          theme={ButtonTheme.CLEAR}
          disabled={disabled}
          onClick={onClick}
          className={classNames(cls.item, { [cls.active]: active })}
        >
          {content}
        </ButtonForwardedRef>
      );
    }}
  </Dropdown.Item>
));
