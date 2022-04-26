import React from 'react';
import DEFAULT_PIC from '../../../assets/img/defaultProfile.png';

/* Components */
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';

function Avatar() {
  return (
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
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = DEFAULT_PIC;
            }}
          />
        </div>
        <span className="avatar-name">Josué Rivas</span>
      </MDBCardBody>
      <div className="avatar-setting">
        <MDBIcon fas icon="pen" />
      </div>
    </MDBCard>
  );
}

export default Avatar;
