import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

import {
  getProfileForm,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
} from '../../model/selector/profileSelector';
import { profileActions } from '../../model/slice/profileSlice';

export const EditableProfileCard: FC = memo(() => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  }, []);

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, []);

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }));
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

  return (
    <ProfileCard
      data={formData}
      isLoading={isLoading}
      error={error}
      readonly={readonly}
      onChangeFirstname={onChangeFirstname}
      onChangeLastname={onChangeLastname}
      onChangeAge={onChangeAge}
      onChangeCity={onChangeCity}
      onChangeUsername={onChangeUsername}
      onChangeAvatar={onChangeAvatar}
      onChangeCurrency={onChangeCurrency}
      onChangeCountry={onChangeCountry}
    />
  );
});
