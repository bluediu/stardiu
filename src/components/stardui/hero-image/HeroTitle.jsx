import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

function HeroTitle() {
  /* styles */
  const heroTitleStyled = {
    letterSpacing: '3px',
    paddingTop: '4.8rem',
    paddingLeft: '3rem',
  };

  return (
    <div
      className="col-lg-6 hero-back hero-title-center"
      style={heroTitleStyled}
    >
      <div>
        <span className="d-block fw-bold font-title">
          WELCOME
        </span>
        <span className="d-block fw-bold font-title">BACK,</span>
        <span className="d-block fw-bold font-title">
          PUMPKIN
        </span>
      </div>

      <div className="discover-btn-center">
        <MDBBtn rounded outline color="dark" className="mt-3">
          Discover
        </MDBBtn>
      </div>
    </div>
  );
}

export default HeroTitle;
