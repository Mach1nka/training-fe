import type { FC } from 'react';
import { Fragment, memo } from 'react';
import { Menu as Dropdown } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLinkForwardedRef, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { ButtonForwardedRef, ButtonTheme } from '@/shared/ui/Button/Button';

import popupCls from '../../../styles/popups.module.scss';

export interface DropdownItem {
  content: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  'data-testid'?: string;
}

interface Props extends DropdownItem {
  className?: string;
}

export const MenuItem: FC<Props> = memo(({
  content, disabled, href, onClick, 'data-testid': dataTestId,
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
            underline={AppLinkUnderline.NEVER}
            className={classNames(popupCls.item, { [popupCls.active]: active })}
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
          className={classNames(popupCls.item, { [popupCls.active]: active })}
          data-testid={dataTestId}
        >
          {content}
        </ButtonForwardedRef>
      );
    }}
  </Dropdown.Item>
));