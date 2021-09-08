import React from 'react';
import DESC_IMG from '../../../assets/img/descImage.svg';

function DescriptionImage() {
  return (
    <div className="col-lg-6">
      <img
        src={DESC_IMG}
        className="img-fluid w-75 center-desc-img"
        alt="Stardiu description image"
        loading="lazy"
      />
    </div>
  );
}

export default DescriptionImage;
