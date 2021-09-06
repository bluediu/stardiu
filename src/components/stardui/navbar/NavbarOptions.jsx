import React from 'react';

/* components */
import AuthButtons from '../auth/AuthButtons';
import ShoppingCart from '../cart/ShoppingCart';

function NavbarOptions() {
  return (
    <div className="d-flex align-lg-items-center flex-lg-row flex-sm-column justify-content-between flex-md-column ">
      <ShoppingCart />
      <AuthButtons />
    </div>
  );
}

export default NavbarOptions;
