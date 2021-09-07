import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

function HeroTitle() {
  /* styles */
  const heroTitleStyled = {
    letterSpacing: '3px',
    paddingTop: '4.8rem',
    paddingLeft: '2rem',
  };

  return (
    <div
      className="col-lg-6 hero-back hero-title-center"
      style={heroTitleStyled}
    >
      <div>
        <span className="d-block fw-bold font-title">THE</span>
        <span className="d-block fw-bold font-title">
          STYLISH
        </span>
        <span className="d-block fw-bold font-title green-text">
          COFFE
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
