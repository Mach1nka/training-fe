import axios from 'axios';

import { LOCAL_STORAGE_USER_KEY } from '../constant/localstorage';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
  },
});
