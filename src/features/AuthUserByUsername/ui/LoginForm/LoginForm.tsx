import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ReducersList, useDynamicModuleLoad } from '@/shared/lib/hook/useDynamicModuleLoad';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
  getLoginUsername, getLoginPassword, getLoginLoading, getLoginError,
} from '../../model/selector/loginSelector';
import { loginByUsername } from '../../model/service/loginByUsername';
import cls from './LoginForm.module.scss';

interface Props {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo<Props>(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [username, password]);

  useDynamicModuleLoad(initialReducers);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('authForm.title')} />
      {error ? <Text text={error} theme={TextTheme.ERROR} /> : null}
      <Input
        placeholder={t('authForm.username')}
        autoFocus
        className={cls.input}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        placeholder={t('authForm.password')}
        type="password"
        className={cls.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('login')}
      </Button>
    </div>
  );
});

export default LoginForm;
