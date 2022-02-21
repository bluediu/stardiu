import React, { useState } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {
  countProducts,
  startAddToCart,
  startDeleteOneFromCart,
  startIsProductAddedToCart,
} from '../../../context/actions/shoppingCart';
import AuthModal from '../../modal/authModal/AuthModal';
import { useEffect } from 'react';

function ShoppingCartBtn() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [productExist, setProductExist] = useState(false);

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
      verifyProduct();
    } else {
      setShowModal(true);
    }
  };

  const handleRemoveFromCart = () => {
    if (uid) {
      startDeleteOneFromCart(detailsData._id, uid);

      dispatch(countProducts(total - 1));
      setProductExist(false);
    }
  };

  useEffect(() => {
    setProduct(detailsData);
  }, [detailsData]);

  /* check if the product has been added to cart */
  const verifyProduct = async () => {
    if (product !== null && uid) {
      const { _id } = product;

      const { exist } = await startIsProductAddedToCart(
        _id,
        uid
      );

      setProductExist(exist);
    }
  };

  useEffect(() => {
    verifyProduct();
  }, [product]);

  const toggleShow = () => setShowModal(!showModal);

  return (
    <div>
      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        toggleShow={toggleShow}
      />

      {productExist ? (
        <>
          <MDBBtn
            size="sm"
            rounded
            outline
            color="danger"
            onClick={handleRemoveFromCart}
          >
            <MDBIcon fas icon="minus" className="me-2" />
            Remove from cart
          </MDBBtn>
        </>
      ) : (
        <>
          <MDBBtn
            size="sm"
            rounded
            outline
            color="dark"
            onClick={handleAddToCart}
          >
            <MDBIcon fas icon="cart-plus" className="me-2" />
            Add to cart
          </MDBBtn>
        </>
      )}
    </div>
  );
}

export default ShoppingCartBtn;
