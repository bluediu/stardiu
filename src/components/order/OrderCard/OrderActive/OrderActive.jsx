import React, { memo } from 'react';

/* Components */
import {
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
} from 'mdb-react-ui-kit';

import {
  OrderFooter,
  OrderHeader,
  OrderProduct,
} from '../Items';

import PropTypes from 'prop-types';

function OrderActive({ active, toggleShow }) {
  const { userId, createdAt, products, amount } = active;

  return (
    <>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader className="orders-header">
            <OrderHeader
              user={userId}
              num={1}
              date={createdAt}
              isModal={true}
            />
          </MDBModalHeader>
          <MDBModalBody>
            {products.map((product) => (
              <OrderProduct
                key={product._id}
                product={product}
              />
            ))}
          </MDBModalBody>

          <MDBModalFooter>
            <OrderFooter
              total={products.length}
              amount={amount}
              modal={true}
              toggleShow={toggleShow}
            />
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </>
  );
}

OrderActive.propTypes = {
  active: PropTypes.object.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default memo(OrderActive);
