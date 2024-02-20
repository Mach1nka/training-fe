import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import type { Currency } from '@/entities/Currency';
import { CurrencySelect } from '@/entities/Currency';
import type { Country } from '@/entities/Country';
import { CountrySelect } from '@/entities/Country';
import { Flex } from '@/shared/ui/Flex/Flex';

import type { Profile } from '../../model/types';

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
      <Flex
        justify="center"
        align="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        justify="center"
        align="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('error.title')}
          text={t('error.text')}
        />
      </Flex>
    );
  }

  const mods = {
    [cls.readonly]: !readonly,
  };

  return (
    <Flex
      gap={12}
      direction="column"
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && <Flex justify="center"><Avatar src={data?.avatar} size={100} /></Flex> }
      <Input
        value={data?.firstname}
        placeholder={t('firstname')}
        readonly={readonly}
        onChange={onChangeFirstname}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('lastname')}
        readonly={readonly}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('age')}
        readonly={readonly}
        onChange={onChangeAge}
        data-testid="ProfileCard.age"
      />
      <Input
        value={data?.city}
        placeholder={t('city')}
        readonly={readonly}
        onChange={onChangeCity}
        data-testid="ProfileCard.city"
      />
      <Input
        value={data?.username}
        placeholder={t('username')}
        readonly={readonly}
        onChange={onChangeUsername}
        data-testid="ProfileCard.username"
      />
      <Input
        value={data?.avatar}
        placeholder={t('avatar')}
        readonly={readonly}
        onChange={onChangeAvatar}
        data-testid="ProfileCard.avatar"
      />
      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        onChange={onChangeCurrency}
        data-testid="ProfileCard.currency"
      />
      <CountrySelect
        value={data?.country}
        readonly={readonly}
        onChange={onChangeCountry}
        data-testid="ProfileCard.country"
      />
    </Flex>
  );
});
