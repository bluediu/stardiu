import React from 'react';

/* hooks */
import { usePayment } from '../../hooks/usePayment';

/* Components */
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';
import PaymentCard from './PaymentCard';

import PropTypes from 'prop-types';

function Payment({ show, toggleShow }) {
  const {
    handleCallback,
    handleSubmit,
    handleInputFocus,
    handleInputChange,
    creditCard,
  } = usePayment(toggleShow);

  const { number, name, expiry, cvc, issuer, focused, address } =
    creditCard;

  return (
    <MDBModal staticBackdrop tabIndex="-1" show={show}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Método de pago</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <PaymentCard
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={handleCallback}
              handleSubmit={handleSubmit}
              handleInputFocus={handleInputFocus}
              handleInputChange={handleInputChange}
              issuer={issuer}
              defaultAddress={address}
            />
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

Payment.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Payment;
