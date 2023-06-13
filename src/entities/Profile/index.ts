import { Profile, ProfileSchema } from './model/type';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/service/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  ProfileCard, profileActions, profileReducer, fetchProfileData, Profile, ProfileSchema,
};
