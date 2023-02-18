import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }, idx) => (
        <Route key={idx} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
    </Routes>
  </Suspense>
);