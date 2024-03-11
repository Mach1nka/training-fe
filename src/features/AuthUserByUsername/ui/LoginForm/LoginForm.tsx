import type { FC, FormEvent } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
  getLoginUsername,
  getLoginPassword,
  getLoginLoading,
  getLoginError,
} from '../../model/selector/loginSelector';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

interface Props {
  className?: string;
  onSuccess: () => void;
}

const LoginForm: FC<Props> = memo(({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, []);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const onLoginSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await dispatch(loginByUsername({ username, password }));

      if (response.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    },
    [username, password, onSuccess],
  );

  useDynamicReducerLoad(initialReducers);

  return (
    <form onSubmit={onLoginSubmit} className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('authForm.title')} />
      {error ? <Text text={error} theme={TextTheme.ERROR} /> : null}
      <Input
        placeholder={t('authForm.username')}
        autoFocus
        className={cls.input}
        value={username}
        onChange={onChangeUsername}
        data-testid="LoginForm.username"
      />
      <Input
        placeholder={t('authForm.password')}
        type="password"
        className={cls.input}
        value={password}
        onChange={onChangePassword}
        data-testid="LoginForm.password"
      />
      <Button
        type="submit"
        className={cls.loginBtn}
        disabled={isLoading}
        data-testid="LoginForm.submit"
      >
        {t('login')}
      </Button>
    </form>
  );
});

export default LoginForm;
