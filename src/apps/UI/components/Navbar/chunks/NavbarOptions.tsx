/* Components */
import { MDBSpinner } from 'mdb-react-ui-kit';
import { NavbarProfile } from './NavbarProfile';
import { LoginButton, RegisterButton } from '@/apps/Users/components/Auth';

/* Hooks */
import { useAppSelector } from '@/hooks';

export const NavbarOptions = () => {
  const { user, checking } = useAppSelector((state) => state.user);

  return (
    <div>
      {!user.uid && checking ? (
        <MDBSpinner className="me-2" size="sm">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      ) : (
        <>
          {!user.uid ? (
            <div>
              <LoginButton />
              <RegisterButton margin={true} />
            </div>
          ) : (
            <NavbarProfile />
          )}
        </>
      )}
    </div>
  );
};
