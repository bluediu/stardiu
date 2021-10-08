import React from 'react';

function Alert({ error }) {
  return (
    <>
      <p className="alert alert-danger text-center">
        Error:{error.status} {error.statusText}
      </p>
    </>
  );
}

export default Alert;
