import React from 'react';
import DEFAULT_PROFILE from '../../assets/img/defaultProfile.png';

function Avatar({ img, name }) {
  return (
    <>
      <img
        src={img}
        alt={name}
        className="img-fluid"
        style={{ width: '35px', borderRadius: '50%' }}
        onError={(e) => {
          e.target.src = DEFAULT_PROFILE;
        }}
      />
    </>
  );
}

export default Avatar;
