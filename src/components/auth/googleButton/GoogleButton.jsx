import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './GoogleButton.css';

function GoogleButton() {
  return (
    <div className="social-media">
      <div className="social-icon">
        <MDBIcon fab icon="google" />
      </div>

      <div className="social-text">
        <span>Sign in with google</span>
      </div>
    </div>
  );
}

export default GoogleButton;
