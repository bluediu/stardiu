import React from 'react';
import DEFAULT_PROFILE from '../../assets/img/defaultProfile.png';
import PropTypes from 'prop-types';

function Avatar({ img, name }) {
  return (
    <>
      <img
        src={img}
        alt={name}
        className="img-fluid"
        style={{
          width: '30px',
          borderRadius: '50%',
          marginLeft: '0.4rem',
        }}
        onError={(e) => {
          e.target.src = DEFAULT_PROFILE;
        }}
      />
    </>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Avatar;
