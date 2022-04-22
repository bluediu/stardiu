import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { OrderHeader, OrderFooter, OrderProduct } from './Items';
import { useDispatch, useSelector } from 'react-redux';
import './OrderCard.css';
import { startGetOrders } from '../../../context/actions/order';

function OrderCard() {
  const { uid } = useSelector((state) => state.auth);
  const { orders, isLoading } = useSelector(
    (state) => state.orders
  );

  const [showProduct, setShowProduct] = useState(false);

  const toggleShow = (order) => {
    setShowProduct(!showProduct);
    console.log(order);
  };

  const dispath = useDispatch();

  useEffect(() => {
    if (uid) {
      dispath(startGetOrders(uid));
    }
  }, [uid]);

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
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>Hola...</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default OrderCard;
