import { useDispatch } from 'react-redux';
import { AppDispatch } from '../config/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
