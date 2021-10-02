import React from 'react';
import PropTypes from 'prop-types';

function AuthErrorMessage({ msg }) {
  return (
    <div className="form-text" style={{ color: '#E74C3C' }}>
      {msg}
    </div>
  );
}

AuthErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default AuthErrorMessage;
