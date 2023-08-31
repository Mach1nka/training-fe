import type { FC } from 'react';
import {
  memo, useCallback, useEffect, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

import { ProfileCard, ValidateProfileError } from '@/entities/Profile';
import type { Currency } from '@/entities/Currency';
import type { Country } from '@/entities/Country';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

import {
  getProfileForm,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateError,
} from '../../model/selector/profileSelector';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import cls from './EditableProfileCard.module.scss';

const validateErrorMapper = (t: TFunction) => ({
  [ValidateProfileError.INCORRECT_FIRSTNAME]: t('validateErrors.firstname'),
  [ValidateProfileError.INCORRECT_LASTNAME]: t('validateErrors.lastname'),
  [ValidateProfileError.INCORRECT_USERNAME]: t('validateErrors.username'),
  [ValidateProfileError.INCORRECT_AGE]: t('validateErrors.age'),
  [ValidateProfileError.INCORRECT_COUNTRY]: t('validateErrors.country'),
  [ValidateProfileError.INCORRECT_CURRENCY]: t('validateErrors.currency'),
  [ValidateProfileError.SERVER_ERROR]: t('validateErrors.server'),
  [ValidateProfileError.NO_DATA]: t('validateErrors.noData'),
});

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface Props {
  id: string;
  dataTestId?: string;
}

export const EditableProfileCard: FC<Props> = memo(({ id }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateError);

  const errors = useMemo(() => (
    validateErrors?.map((error) => (
      <Text
        key={error}
        theme={TextTheme.ERROR}
        text={validateErrorMapper(t)[error]}
        dataTestId="EditableProfileCardError"
      />
    ))
  ), [validateErrors]);

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  }, []);

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, []);

  const onChangeAge = useCallback((value: string) => {
    const onlyNumbers = /^\d+$/;
    if (onlyNumbers.test(value) || value === '') {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    }
  }, []);

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, []);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, []);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, []);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, []);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, []);

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    if (id) {
      thunkMiddleware(() => dispatch(fetchProfileData(id)));
    }
  }, [id]);

  return (
    <>
      <EditableProfileCardHeader className={cls.header} />
      {errors}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        dataTestId="ProfileCard"
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </>
  );
});
