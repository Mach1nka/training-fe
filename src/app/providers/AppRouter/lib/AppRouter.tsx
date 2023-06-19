import { FC, Suspense, memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppRouteProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { AuthProtection } from './AuthProtection';

export const AppRouter: FC = memo(() => {
  const renderWithProtection = ({ path, element, authOnly }: AppRouteProps) => {
    const uiElement = <div className="page-wrapper">{element}</div>;

    if (authOnly) {
      return (
        <Route key={path} element={<AuthProtection />}>
          <Route path={path} element={uiElement} />
        </Route>
      );
    }

    return <Route key={path} path={path} element={uiElement} />;
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithProtection)}
      </Routes>
    </Suspense>
  );
});
