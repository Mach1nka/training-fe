import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import {
  getProfileReadonly,
  updateProfileData,
  profileActions,
  getProfileChangePermission,
} from '@/features/EditProfileInfo';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { Flex } from '@/shared/ui/Flex/Flex';

interface Props {
  className?: string;
}

export const ProfilePageHeader: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const canBeEdited = useSelector(getProfileChangePermission);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, []);

  const onCancelEditing = useCallback(() => {
    dispatch(profileActions.cancelEditing());
  }, []);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, []);

  const controlBlock = readonly ? (
    <Button onClick={onEdit}>
      {t('edit')}
    </Button>
  ) : (
    <Flex gap={12} isGrown={false}>
      <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEditing}>
        {t('cancel')}
      </Button>
      <Button onClick={onSave}>
        {t('save')}
      </Button>
    </Flex>
  );

  return (
    <Flex justify="space-between" className={className}>
      <Text title={t('title')} />
      {canBeEdited ? controlBlock : null}
    </Flex>
  );
});
