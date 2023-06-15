import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getProfileReadonly, updateProfileData, profileActions } from '@/features/EditProfileInfo';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

import cls from './ProfilePageHeader.module.scss';

interface Props {
  className?: string;
}

export const ProfilePageHeader: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, []);

  const onCancelEditing = useCallback(() => {
    dispatch(profileActions.cancelEditing());
  }, []);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, []);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('title')} />
      {
        readonly ? (
          <Button className={cls.editBtn} onClick={onEdit}>
            {t('edit')}
          </Button>
        ) : (
          <>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              className={cls.editBtn}
              onClick={onCancelEditing}
            >
              {t('cancel')}
            </Button>
            <Button onClick={onSave}>
              {t('save')}
            </Button>
          </>
        )
      }
    </div>
  );
});
