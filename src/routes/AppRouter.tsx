import { useEffect } from 'react';

/* Libs */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/* Context */
import { startRenewToken } from '@/apps/Users/context';

/* Routers */
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

/* Hooks */
import { useAppDispatch, useAppSelector } from '@/hooks';

/* Constants */
import { TOKEN, usersPath } from '@/apps/Users/constants';

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startRenewToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const token = localStorage.getItem(TOKEN) ?? '';
  const isAuthenticated = !!token || !!user.uid;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>JJJJ</h1>} />

          {/* Private routes */}
          <Route
            path={usersPath.AUTH_PATH}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                element={<AuthRouter />}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
