import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/constant/router';

export const AuthProtection: FC = () => {
  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return <Navigate to={RoutePath.main} replace />;
  }

  return <Outlet />;
};
