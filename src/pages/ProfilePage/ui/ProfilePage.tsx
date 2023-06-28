import { FC, useEffect } from 'react';

import { EditableProfileCard, profileReducer, fetchProfileData } from '@/features/EditProfileInfo';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    thunkMiddleware(() => dispatch(fetchProfileData()));
  }, []);

  return (
    <>
      <ProfilePageHeader />
      <EditableProfileCard />
    </>
  );
};

export default ProfilePage;
