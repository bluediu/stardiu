import React from 'react';
import DEFAULT_PIC from '../../../assets/img/defaultProfile.png';
import { useSelector } from 'react-redux';

/* Components */
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';

function Avatar() {
  const { name, img } = useSelector((state) => state.auth);

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
            src={img}
            loading="lazy"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = DEFAULT_PIC;
            }}
          />
        </div>
        <span className="avatar-name">{name}</span>
      </MDBCardBody>
      <div className="avatar-setting">
        <MDBIcon fas icon="pen" />
      </div>
    </MDBCard>
  );
}

export default Avatar;
