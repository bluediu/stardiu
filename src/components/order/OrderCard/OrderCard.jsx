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

import OrderActive from './OrderActive/OrderActive';
import Zoom from 'react-reveal/Zoom';
import Loader from '../../utils/loader/Loader';
import Empty from '../../utils/Empty/Empty';
import { OrderHeader, OrderFooter, OrderProduct } from './Items';

/* styles */
import './OrderCard.css';

function OrderCard() {
  /* Redux Hooks */
  const { uid } = useSelector((state) => state.auth);
  const { orders, isLoading, active, thereAreOrdersDone } =
    useSelector((state) => state.orders);
  const dispath = useDispatch();

  /* React states */
  const [showProduct, setShowProduct] = useState(false);
  const [clidrenModal, setClidrenModal] = useState(null);

  const toggleShow = (order) => {
    setShowProduct(!showProduct);

    dispath(activeOrder(order));
  };

  useEffect(() => {
    if (showProduct) {
      setClidrenModal(
        <OrderActive active={active} toggleShow={toggleShow} />
      );
    }
  }, [showProduct]);

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
      <section
        className={`orders-container ${
          !thereAreOrdersDone && 'no-orders'
        }`}
      >
        {thereAreOrdersDone ? (
          orders?.map((order, i) => (
            <Zoom key={order._id}>
              <MDBCard alignment="center" className="order-card">
                <MDBCardHeader className="orders-header">
                  <OrderHeader
                    user={order.userId}
                    num={i + 1}
                    date={order.createdAt}
                  />
                </MDBCardHeader>
                <MDBCardBody>
                  <small className="text-black-50">
                    Vista previa
                  </small>

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
            </Zoom>
          ))
        ) : (
          <Empty title="Aún no has realizado ninguna orden" />
        )}
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
