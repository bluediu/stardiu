import { Routes, Route, Navigate } from 'react-router-dom';

/* Layouts */
import { AuthLayout } from '@/apps/Users/layouts';

/* Pages */
import { LoginPage, RegisterPage } from '@/apps/Users/pages';

/* Constants */
import { userPaths } from '@/apps/Users/constants';

export const AuthRouter = () => {
  return (
    <AuthLayout>
      <article>
        <Routes>
          <Route path={userPaths.LOGIN_PATH} element={<LoginPage />} />
          <Route path={userPaths.REGISTER_PATH} element={<RegisterPage />} />

          {/* Default route */}
          <Route path="*" element={<Navigate to={userPaths.LOGIN} />} />
        </Routes>
      </article>
    </AuthLayout>
  );
};
