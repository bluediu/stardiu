/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

/* Constants */
import { userPaths } from '@/apps/Users/constants';

export const RegisterButton = ({ margin }: { margin: boolean }) => {
  const navigate = useNavigate();

  return (
    <MDBBtn
      rounded
      color="dark"
      onClick={() => navigate(userPaths.REGISTER)}
      className={margin ? 'ms-2' : 'm-0'}
    >
      Join us
    </MDBBtn>
  );
};
