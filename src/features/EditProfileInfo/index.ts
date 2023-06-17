import { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import {
  getProfileReadonly,
} from './model/selector/profileSelector';
import { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/service/updateProfileData/updateProfileData';

export {
  EditableProfileCard,
  getProfileReadonly,
  profileReducer,
  profileActions,
  fetchProfileData,
  updateProfileData,
};
