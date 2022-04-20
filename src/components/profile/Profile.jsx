import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import './Profile.css';
import OrderCard from '../order/OrderCard/OrderCard';

function Profile() {
  return (
    <main className="container mt-5 d-flex flex-column">
      <section>
        <MDBCard
          style={{
            boxShadow: '0 2px 9px rgba(0, 0, 0, 0.2)',
          }}
          className="avatar-card mb-4"
        >
          <MDBCardBody>
            <div className="avatar-profile">
              <img
                className="avatar-profile__image"
                src="https://lh3.googleusercontent.com/a-/AOh14GgKEHB1fB40oxf-Ws58DhZrm29UzqzKs9JGX2DA=s96-c"
                alt="profile-pic"
                loading="lazy"
              />
            </div>
            <span className="avatar-name">Josué Rivas</span>
          </MDBCardBody>
          <div className="avatar-setting">
            <MDBIcon fas icon="pen" />
          </div>
        </MDBCard>
      </section>

      <section>
        <h4 className="text-black-50 mx-3">Lista de ordenes</h4>

        <OrderCard />
      </section>
    </main>
  );
}

export default Profile;
