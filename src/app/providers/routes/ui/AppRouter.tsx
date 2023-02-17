import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }, idx) => (
        <Route key={idx} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
    </Routes>
  </Suspense>
);
