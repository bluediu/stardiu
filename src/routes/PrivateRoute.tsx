import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  element: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  element,
}) => {
  return isAuthenticated ? <Navigate to="/" /> : element;
};
