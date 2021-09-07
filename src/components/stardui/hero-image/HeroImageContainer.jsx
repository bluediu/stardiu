import React from 'react';
import COFFE_IMAGE from '../../../assets/img/coffee-cup.svg';

function HeroImageContainer() {
  return (
    <div className="col-lg-6" style={{ paddingTop: '6rem' }}>
      <img
        src={COFFE_IMAGE}
        alt="coffe cup"
        loading="lazy"
        className="img-fluid"
        style={{ width: '320px' }}
      />
    </div>
  );
}

export default HeroImageContainer;
