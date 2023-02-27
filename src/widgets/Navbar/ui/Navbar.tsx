import { FC, useState, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolorem, consequatur ea tempora odio earum nobis error dolor sit placeat architecto officiis sunt a veniam. Aspernatur impedit nulla molestiae suscipit!</p>
      </Modal>
    </div>
  );
};
