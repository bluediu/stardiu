import React, { useState } from 'react';

/* hooks */
import { useCart } from '../../../hooks/useCart';

/* Components */
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import AuthModal from '../../modal/authModal/AuthModal';

function ShoppingCartBtn({ size }) {
  const [showModal, setShowModal] = useState(false);

  const toggleShow = () => setShowModal(!showModal);

  const { loadingAction, productExist, onAction } = useCart(
    setShowModal,
    size
  );

  return (
    <div>
      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        toggleShow={toggleShow}
      />

      <MDBBtn
        size="sm"
        disabled={loadingAction}
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
          {productExist
            ? 'Remover del carrito'
            : 'Añadir al carrito'}
        </div>
      </MDBBtn>
    </div>
  );
}

export default ShoppingCartBtn;
