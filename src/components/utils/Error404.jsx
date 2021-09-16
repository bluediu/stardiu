import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/img/error404.svg';

function Error404() {
  return (
    <main className="container d-flex justify-content-center flex-column align-items-center">
      <div className="m-5 w-50">
        <img src={error} alt="" className="img-fluid" />
      </div>

      <p style={{ fontSize: '2rem' }}>Not found</p>

      <Link to="/" className="btn btn-outline-dark">
        Redirect
      </Link>
    </main>
  );
}

export default Error404;
