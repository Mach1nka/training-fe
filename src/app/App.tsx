import { Suspense, FC, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

const App: FC = () => {
  const dispatch = useAppDispatch();

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
