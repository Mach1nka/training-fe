import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';
import { Flex } from '@/shared/ui/Flex/Flex';

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
      {data?.avatar && <Flex justify="center"><Avatar src={data?.avatar} /></Flex> }
      <Input
        value={data?.firstname}
        placeholder={t('firstname')}
        readonly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        value={data?.lastname}
        placeholder={t('lastname')}
        readonly={readonly}
        onChange={onChangeLastname}
      />
      <Input
        value={data?.age}
        placeholder={t('age')}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.city}
        placeholder={t('city')}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.username}
        placeholder={t('username')}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('avatar')}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        value={data?.country}
        readonly={readonly}
        onChange={onChangeCountry}
      />
    </Flex>
  );
});
