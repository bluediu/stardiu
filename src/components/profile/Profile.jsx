import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import './Profile.css';

function Profile() {
  return (
    <main className="container mt-5">
      <MDBCard
        style={{
          boxShadow: '0 2px 9px rgba(0, 0, 0, 0.2)',
        }}
        className="avatar-card"
      >
        <MDBCardBody>
          <div className="avatar">
            <img
              className="avatar__image"
              src="https://lh3.googleusercontent.com/a-/AOh14GgKEHB1fB40oxf-Ws58DhZrm29UzqzKs9JGX2DA=s96-c"
              alt="profile-pic"
              loading="lazy"
            />
          </div>
          <span className="avatar-name">Josué Rivas</span>
        </MDBCardBody>
        <div className="avatar-setting">
          <MDBIcon fas icon="tools" />
        </div>
      </MDBCard>
    </main>
  );
}

export default Profile;
