import React, { useState } from 'react';

/* Components */
import Card from 'react-credit-cards';
import TimePicker from 'react-time-picker';
import {
  MDBBtn,
  MDBIcon,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
} from 'mdb-react-ui-kit';

/* styles */
import './PaymentCard.css';
import 'react-credit-cards/es/styles-compiled.css';

function PaymentCard(props) {
  const {
    number,
    name,
    expiry,
    cvc,
    focused,
    handleCallback,
    handleSubmit,
    handleInputFocus,
    handleInputChange,
    issuer,
    defaultAddress,
  } = props;

  const [date, setDate] = useState('');

  return (
    <section className="Payment">
      <div className="App-payment">
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit} className="form-main">
          <div className="form-group">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Número de tarjeta"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <small className="mx-2 text-black-50">
              Ej.: 49..., 51..., 36..., 37...
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control mt-2"
              placeholder="Nombre"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control mt-2"
                placeholder="Válido hasta"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control mt-2"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />

          <hr />

          <div className="form-group">
            <label htmlFor="address">Dirección</label>
            <input
              name="address"
              placeholder="Ingresa tu dirección"
              type="text"
              value={defaultAddress}
              className="form-control border"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="form-group mt-3">
            <MDBPopover
              color="light"
              size="sm"
              style={{ marginRight: '1rem', color: '#000000' }}
              btnChildren="?"
              placement="right"
            >
              <MDBPopoverHeader>Horarios</MDBPopoverHeader>
              <MDBPopoverBody>
                Los horarios valido son de 8 AM hasta las 7:30 PM
              </MDBPopoverBody>
            </MDBPopover>

            <label htmlFor="Fecha de entrega deseada">
              Fecha de entrega
            </label>

            <TimePicker
              onChange={setDate}
              value={date}
              required
              className="form-control border"
              style={{ border: '0' }}
              format="h:m a"
              maxTime="19:30"
              minTime="08:00"
            />
          </div>

          <div className="form-actions">
            <MDBBtn color="dark" block type="submit">
              <MDBIcon far icon="credit-card" className="me-2" />
              PAGAR
            </MDBBtn>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PaymentCard;
