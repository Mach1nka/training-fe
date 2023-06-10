import { useDispatch } from 'react-redux';
import { AppDispatch } from '../config/redux/config';

export const useAppDispatch = () => useDispatch<AppDispatch>();
