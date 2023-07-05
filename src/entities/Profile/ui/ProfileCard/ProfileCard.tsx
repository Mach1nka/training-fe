import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';

import { Profile } from '../../model/types';
import cls from './ProfileCard.module.scss';

interface Props {
  isLoading: boolean;
  readonly?: boolean;
  className?: string;
  data?: Profile;
  error?: string;
  onChangeFirstname: (value: string) => void;
  onChangeLastname: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeUsername: (value: string) => void;
  onChangeAvatar: (value: string) => void;
  onChangeCurrency: (value: Currency) => void;
  onChangeCountry: (value: Country) => void;
}

export const ProfileCard: FC<Props> = memo(({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('error.title')}
          text={t('error.text')}
        />
      </div>
    );
  }

  const mods = {
    [cls.readonly]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && <div className={cls.avatarWrapper}><Avatar src={data?.avatar} /></div> }
      <Input
        value={data?.firstname}
        placeholder={t('firstname')}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeFirstname}
      />
      <Input
        value={data?.lastname}
        placeholder={t('lastname')}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeLastname}
      />
      <Input
        value={data?.age}
        placeholder={t('age')}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t('city')}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeCity}
      />
      <Input
        value={data?.username}
        placeholder={t('username')}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('avatar')}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        value={data?.country}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeCountry}
      />
    </div>
  );
});
