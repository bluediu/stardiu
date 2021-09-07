import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

function HeroTitle() {
  return (
    <div
      className="col-lg-6"
      style={{ letterSpacing: '3px', paddingTop: '5.04rem' }}
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
      <div>
        <MDBBtn rounded outline color="dark" className="mt-3">
          Discover
        </MDBBtn>
      </div>
    </div>
  );
}

export default HeroTitle;
