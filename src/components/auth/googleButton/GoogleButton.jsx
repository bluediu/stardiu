import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import { MDBIcon } from 'mdb-react-ui-kit';

/* styles */
import './GoogleButton.css';

function GoogleButton({ onClick, disabled }) {
  return (
    <div
      className="social-media"
      onClick={onClick}
      disabled={disabled}
    >
      <div className="social-icon">
        <MDBIcon fab icon="google" />
      </div>

      <div className="social-text">
        <span>Sign in with google</span>
      </div>
    </div>
  );
}

GoogleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default GoogleButton;
