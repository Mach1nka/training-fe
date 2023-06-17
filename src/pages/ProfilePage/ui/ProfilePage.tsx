import { FC, useEffect } from 'react';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { EditableProfileCard, profileReducer, fetchProfileData } from '@/features/EditProfileInfo';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    if (PROJECT !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, []);

  return (
    <>
      <ProfilePageHeader />
      <EditableProfileCard />
    </>
  );
};

export default ProfilePage;
