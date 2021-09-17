import React from 'react';

function AuthErrorMessage({ msg }) {
  return (
    <div className="form-text" style={{ color: '#E74C3C' }}>
      {msg}
    </div>
  );
}

export default AuthErrorMessage;
