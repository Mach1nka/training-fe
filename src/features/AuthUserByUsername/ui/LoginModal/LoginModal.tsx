import { FC } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';

import { LoginForm } from '../LoginForm/LoginForm';
// import cls from './LoginModal.module.scss';

interface Props {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    lazy
    // className={classNames(cls.LoginModal, {}, [className])}
  >
    <LoginForm />
  </Modal>
);
