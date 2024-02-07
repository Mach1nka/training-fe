import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/providers/StoreProvider/config/storeConfig';

export const useAppDispatch = () => useDispatch<AppDispatch>();
