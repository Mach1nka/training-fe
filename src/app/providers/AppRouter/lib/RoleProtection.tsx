import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { UserRole, getUserRole } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface Props {
  allowedRoles?: UserRole[];
}

export const RoleProtection: FC<Props> = ({ allowedRoles }) => {
  const userRole = useSelector(getUserRole);

  if (!allowedRoles) {
    return <Outlet />;
  }

  if (!allowedRoles.every((el) => userRole?.includes(el))) {
    return <Navigate to={RoutePath.forbidden} replace />;
  }

  return <Outlet />;
};
