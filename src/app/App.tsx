import type { FC } from 'react';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInitialized, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

import { AppRouter } from './providers/AppRouter';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback={null}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {initialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
