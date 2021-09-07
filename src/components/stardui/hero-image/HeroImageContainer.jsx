import React from 'react';
import COFFE_IMAGE from '../../../assets/img/coffee-cup.svg';

function HeroImageContainer() {
  return (
    <div className="col-lg-6 hero-title-image">
      <img
        src={COFFE_IMAGE}
        alt="coffe cup"
        loading="lazy"
        className="img-fluid hero-image-size"
      />
    </div>
  );
}

export default HeroImageContainer;
