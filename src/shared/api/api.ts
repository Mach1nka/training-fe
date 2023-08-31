import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { LOCAL_STORAGE_USER_KEY } from '../constant/localstorage';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '';
  }
  return config;
});
