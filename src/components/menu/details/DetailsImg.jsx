import React from 'react';

import PropTypes from 'prop-types';

function DetailsImg({ img, name }) {
  return (
    <img
      src={img}
      alt={name}
      loading="lazy"
      className="img-fluid shadow-2-strong rounded w-75"
    />
  );
}

DetailsImg.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default DetailsImg;
