import React from 'react';

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

export default DetailsImg;
