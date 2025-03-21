import { MDBBtn } from 'mdb-react-ui-kit';

import './CartButton.scss';

export const CartButton = () => {
  return (
    <MDBBtn rounded color="success" className="add-to-cart-btn">
      Add to cart
    </MDBBtn>
  );
};
