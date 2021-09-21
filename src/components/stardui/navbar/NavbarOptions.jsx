import React from 'react';
import { useSelector } from 'react-redux';

/* components */
import AuthButtons from '../auth/AuthButtons';
import AuthLoginBtn from '../auth/AuthLoginBtn';
import AuthSignInBtn from '../auth/AuthSignInBtn';
import ShoppingCart from '../cart/ShoppingCart';
import NavbarProfile from './NavbarProfile';

function NavbarOptions() {
  const { checking } = useSelector((state) => state.auth);

  return (
    <div className="d-flex align-lg-items-center flex-lg-row flex-sm-column justify-content-between flex-md-column">
      <ShoppingCart />
      {checking ? (
        <AuthButtons>
          <AuthLoginBtn margin={true} />
          <AuthSignInBtn />
        </AuthButtons>
      ) : (
        <NavbarProfile />
      )}
    </div>
  );
}

export default NavbarOptions;
