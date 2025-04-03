/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

/* Constants */
import { userPaths } from '@/apps/Users/constants';

export const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <MDBBtn
      rounded
      outline
      color="dark"
      onClick={() => navigate(userPaths.LOGIN)}
    >
      Sign In
    </MDBBtn>
  );
};
