import React from 'react';

function AuthContainer({ children }) {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <section className="container">{children}</section>
    </main>
  );
}

export default AuthContainer;
