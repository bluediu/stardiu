import React from 'react';
import './Auth.css';

function AuthContainer({ children }) {
  return (
    <main
      className="d-flex justify-content-center align-items-center auth-screen-bgc"
      style={{ height: '100vh' }}
    >
      <section className="container">{children}</section>
    </main>
  );
}

export default AuthContainer;
