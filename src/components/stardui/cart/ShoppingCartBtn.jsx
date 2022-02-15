import React, { useState } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {
  countProducts,
  startAddToCart,
} from '../../../context/actions/shoppingCart';
import AuthModal from '../../modal/authModal/AuthModal';

function ShoppingCartBtn() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const { detailsData } = useSelector((state) => state.products);
  const { total } = useSelector((state) => state.shoppingCart);
  const { uid } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (uid) {
      dispatch(
        startAddToCart({
          userId: uid,
          productId: detailsData._id,
          quantity: 1,
        })
      );
      dispatch(countProducts(total + 1));
    } else {
      setShowModal(true);
    }
  };

  const toggleShow = () => setShowModal(!showModal);

  return (
    <div>
      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        toggleShow={toggleShow}
      />

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
