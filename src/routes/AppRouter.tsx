import { useEffect } from 'react';

/* Libs */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

/* Context */
import { startRenewToken } from '@/apps/Users/context';

/* Routers */
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

/* Pages */
import { HomePage } from '@/apps/Home/pages';
import { MenuPage, ProductDetail } from '@/apps/Products/pages';

/* Hooks */
import { useAppDispatch, useAppSelector } from '@/hooks';

/* Constants */
import { productPaths } from '@/apps/Products/constants';
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
          {/* TODO: Change user paths name */}
          <Route path={usersPath.HOME} element={<HomePage />} />
          <Route path={productPaths.MENU} element={<MenuPage />} />
          <Route path={productPaths.MENU_DETAIL} element={<ProductDetail />} />

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
