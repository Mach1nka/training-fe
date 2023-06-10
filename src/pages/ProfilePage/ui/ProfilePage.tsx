import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ReducersList, useDynamicModuleLoad } from '@/shared/hook/useDynamicModuleLoad';
import { profileReducer } from '@/entities/Profile';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface Props {
  className?: string;
}

const ProfilePage: FC<Props> = ({ className }) => {
  const { t } = useTranslation('profile');

  useDynamicModuleLoad(initialReducers);

  return (
    <div>
      {t('title')}
    </div>
  );
};

export default ProfilePage;
