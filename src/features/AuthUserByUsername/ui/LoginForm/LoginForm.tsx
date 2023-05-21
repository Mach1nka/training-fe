import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface Props {
  className?: string;
}

export const LoginForm: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('authForm.username')} autoFocus className={cls.input} />
      <Input placeholder={t('authForm.password')} type="text" className={cls.input} />
      <Button className={cls.loginBtn}>
        {t('login')}
      </Button>
    </div>
  );
};
