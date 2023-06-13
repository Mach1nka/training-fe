import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { ProfileCard, fetchProfileData, profileReducer } from '@/entities/Profile';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

interface Props {
  className?: string;
}

const ProfilePage: FC<Props> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
