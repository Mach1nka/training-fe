import type { FC } from 'react';
import { Fragment, memo } from 'react';
import { Menu as HMenu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLinkForwardedRef, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import type { RTLProps } from '@/shared/types/common';

import popupCls from '../../../styles/popups.module.scss';

export interface DropdownItem extends RTLProps {
  className?: string;
  content: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface Props extends DropdownItem {
  className?: string;
}

export const MenuItem: FC<Props> = memo(
  ({ content, disabled, href, onClick, 'data-testid': dataTestId = '', className }) => (
    <HMenu.Item disabled={disabled} as={Fragment}>
      {({ active }) => {
        if (href) {
          return (
            <AppLinkForwardedRef
              to={href}
              onClick={onClick}
              underline={AppLinkUnderline.NEVER}
              className={classNames(popupCls.item, { [popupCls.active]: active }, [className])}
            >
              {content}
            </AppLinkForwardedRef>
          );
        }

        return (
          <Button
            theme={ButtonTheme.CLEAR}
            disabled={disabled}
            onClick={onClick}
            className={classNames(popupCls.item, { [popupCls.active]: active }, [className])}
            data-testid={dataTestId}
          >
            {content}
          </Button>
        );
      }}
    </HMenu.Item>
  ),
);
