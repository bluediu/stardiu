import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { startAddToCart } from '../../../context/actions/shoppingCart';

function ShoppingCartBtn({ id }) {
  const dispatch = useDispatch();

  const { detailsData } = useSelector((state) => state.products);
  const { uid } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    dispatch(
      startAddToCart({
        userId: uid,
        productId: detailsData._id,
        quantity: 1,
      })
    );
  };

  return (
    <div>
      <MDBBtn
        size="sm"
        rounded
        outline
        color="dark"
        onClick={handleAddToCart}
      >
        <MDBIcon fas icon="cart-plus" className="me-2" />
        {/* <MDBIcon fas icon="minus" /> */}
        Add to cart
      </MDBBtn>
    </div>
  );
}

export default ShoppingCartBtn;
