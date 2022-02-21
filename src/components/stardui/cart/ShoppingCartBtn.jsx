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
  const [loadingAction, setLoadingAction] = useState(false);
  const [product, setProduct] = useState(null);
  const [productExist, setProductExist] = useState(false);

  const { detailsData } = useSelector((state) => state.products);
  const { total } = useSelector((state) => state.shoppingCart);
  const { uid } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (uid) {
      setLoadingAction(true);
      dispatch(
        startAddToCart({
          userId: uid,
          productId: detailsData._id,
          quantity: 1,
        })
      );
      dispatch(countProducts(total + 1));
      verifyProduct();

      setLoadingAction(false);
    } else {
      setShowModal(true);
    }
  };

  const handleRemoveFromCart = () => {
    if (uid) {
      setLoadingAction(true);
      startDeleteOneFromCart(detailsData._id, uid);

      dispatch(countProducts(total - 1));
      setProductExist(false);
      setLoadingAction(false);
    }
  };

  const onAction = () => {
    if (!loadingAction) {
      if (productExist) {
        handleRemoveFromCart();
      } else {
        handleAddToCart();
      }
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

      <MDBBtn
        size="sm"
        disabled={loadingAction ? true : false}
        rounded
        outline
        color={productExist ? 'danger' : 'dark'}
        onClick={onAction}
      >
        <div>
          <MDBIcon
            fas
            icon={productExist ? 'minus' : 'cart-plus'}
            className="me-2"
          />
          {productExist ? 'Remove from cart' : 'Add to cart'}
        </div>
      </MDBBtn>
    </div>
  );
}

export default ShoppingCartBtn;
