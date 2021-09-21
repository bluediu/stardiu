import React from 'react';
import { useSelector } from 'react-redux';
import DEFAULT_PROFILE from '../../../assets/img/defaultProfile.png';

function NavbarProfile() {
  const { name, img } = useSelector((state) => state.auth);
  return (
    <section className="d-flex align-items-center align-items-center">
      <span className="fw-bold">{name}</span>
      <img
        src={img}
        alt={name}
        className="img-fluid"
        style={{ width: '35px' }}
        onError={(e) => {
          e.target.src = DEFAULT_PROFILE;
        }}
      />
    </section>
  );
}

export default NavbarProfile;
