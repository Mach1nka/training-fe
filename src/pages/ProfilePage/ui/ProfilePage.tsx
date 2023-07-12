import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EditableProfileCard, profileReducer, fetchProfileData } from '@/features/EditProfileInfo';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { Page } from '@/shared/ui/Page/Page';

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    if (id) {
      thunkMiddleware(() => dispatch(fetchProfileData(id)));
    }
  }, []);

  return (
    <Page>
      <ProfilePageHeader />
      <EditableProfileCard />
    </Page>
  );
};

export default ProfilePage;
