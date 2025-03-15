/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

export const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <MDBBtn
      rounded
      outline
      color="dark"
      onClick={() => navigate(usersPath.LOGIN)}
    >
      Sign In
    </MDBBtn>
  );
};
