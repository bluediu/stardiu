import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
} from 'mdb-react-ui-kit';
import React from 'react';
import { OrderHeader, OrderFooter, OrderProduct } from './Items';
import './OrderCard.css';

function OrderCard() {
  return (
    <div className="container">
      <section className="orders-container">
        <MDBCard alignment="center" className="order-card">
          <MDBCardHeader className="orders-header">
            <OrderHeader />
          </MDBCardHeader>
          <MDBCardBody>
            <OrderProduct />
          </MDBCardBody>
          <MDBCardFooter>
            <OrderFooter />
          </MDBCardFooter>
        </MDBCard>
      </section>
    </div>
  );
}

export default OrderCard;
