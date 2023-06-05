import { Suspense, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/RouterProvider';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions } from '@/entities/User';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
