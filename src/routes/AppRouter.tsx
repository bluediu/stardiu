import { useEffect } from 'react';

/* Libs */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/* Context */
import { startRenewToken } from '@/apps/Users/context';

/* Routers */
import { AuthRouter } from './AuthRouter';
import { MenuRouter } from './MenuRouter';
import { PrivateRoute } from './PrivateRoute';

/* Pages */
import { HomePage } from '@/apps/Home/pages';

/* Hooks */
import { useAppDispatch, useAppSelector } from '@/hooks';

/* Constants */
import { productPaths } from '@/apps/Products/constants';
import { TOKEN, userPaths } from '@/apps/Users/constants';

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
          <Route path={userPaths.HOME} element={<HomePage />} />
          <Route path={productPaths.MENU_PATH} element={<MenuRouter />} />

          {/* Private routes */}
          <Route
            path={userPaths.AUTH_PATH}
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
