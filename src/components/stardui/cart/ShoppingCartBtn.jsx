import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function ShoppingCartBtn() {
  return (
    <div>
      <MDBBtn size="sm" rounded outline color="dark">
        <MDBIcon fas icon="cart-plus" className="me-2" />
        {/* <MDBIcon fas icon="minus" /> */}
        Add to cart
      </MDBBtn>
    </div>
  );
}

export default ShoppingCartBtn;
