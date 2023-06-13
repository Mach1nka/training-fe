import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import {
  getProfileData,
  getProfileLoading,
  getProfileError,
} from '../../model/selector/profileSelector';
import cls from './ProfileCard.module.scss';

interface Props {
  className?: string;
}

export const ProfileCard: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('title')} />
        <Button className={cls.editBtn}>
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.firstname} placeholder={t('firstname')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('lastname')} className={cls.input} />
      </div>
    </div>
  );
});
