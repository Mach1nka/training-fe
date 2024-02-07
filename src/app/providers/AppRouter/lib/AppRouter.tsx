import type { FC } from 'react';
import { Suspense, memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import type { AppRouteProps } from '@/shared/config/routeConfig/routeConfig';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { AuthProtection } from './AuthProtection';
import { RoleProtection } from './RoleProtection';

export const AppRouter: FC = memo(() => {
  const renderWithProtection = ({
    path, element, authOnly, allowedRoles,
  }: AppRouteProps) => {
    if (authOnly) {
      return (
        <Route key={path} element={<AuthProtection />}>
          <Route element={<RoleProtection allowedRoles={allowedRoles} />}>
            <Route path={path} element={element} />
          </Route>
        </Route>
      );
    }

    return <Route key={path} path={path} element={element} />;
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithProtection)}
      </Routes>
    </Suspense>
  );
});
