import React from 'react';

/* components */
import AuthButtons from '../auth/AuthButtons';
import AuthLoginBtn from '../auth/AuthLoginBtn';
import AuthSignInBtn from '../auth/AuthSignInBtn';
import ShoppingCart from '../cart/ShoppingCart';

function NavbarOptions() {
  return (
    <div className="d-flex align-lg-items-center flex-lg-row flex-sm-column justify-content-between flex-md-column ">
      <ShoppingCart />
      <AuthButtons>
        <AuthLoginBtn margin={true} />
        <AuthSignInBtn />
      </AuthButtons>
    </div>
  );
}

export default NavbarOptions;
