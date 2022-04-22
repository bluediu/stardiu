import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeOrder,
  startGetOrders,
} from '../../../context/actions/order';

/* Components */
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBModal,
} from 'mdb-react-ui-kit';

import { OrderHeader, OrderFooter, OrderProduct } from './Items';
import OrderActive from './OrderActive/OrderActive';

/* styles */
import './OrderCard.css';
import Loader from '../../utils/loader/Loader';

function OrderCard() {
  /* Redux Hooks */
  const { uid } = useSelector((state) => state.auth);
  const { orders, isLoading, active } = useSelector(
    (state) => state.orders
  );
  const dispath = useDispatch();

  /* React states */
  const [showProduct, setShowProduct] = useState(false);
  const [clidrenModal, setClidrenModal] = useState(null);

  useEffect(() => {
    if (showProduct) {
      setClidrenModal(<OrderActive active={active} />);
    }
  }, [showProduct]);

  const toggleShow = (order) => {
    setShowProduct(!showProduct);

    dispath(activeOrder(order));
  };

  useEffect(() => {
    if (uid) {
      dispath(startGetOrders(uid));
    }
  }, [uid]);

  if (isLoading)
    return (
      <div className="order-loader mt-5">
        <Loader />
      </div>
    );
  return (
    <div className="container">
      <section className="orders-container">
        {orders?.map((order, i) => (
          <MDBCard
            alignment="center"
            className="order-card"
            key={order._id}
          >
            <MDBCardHeader className="orders-header">
              <OrderHeader
                user={order.userId}
                num={i + 1}
                date={order.createdAt}
              />
            </MDBCardHeader>
            <MDBCardBody>
              <OrderProduct product={order.products[0]} />
              {order.products.length > 1 && (
                <OrderProduct product={order.products[1]} />
              )}
            </MDBCardBody>
            <MDBCardFooter>
              <OrderFooter
                total={order.products.length}
                amount={order.amount}
                toggleShow={toggleShow}
                order={order}
              />
            </MDBCardFooter>
          </MDBCard>
        ))}
      </section>

      <MDBModal
        show={showProduct}
        setShow={setShowProduct}
        tabIndex="-1"
      >
        {clidrenModal}
      </MDBModal>
    </div>
  );
}

export default OrderCard;
