import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

import './Likes.css';

function Likes() {
  return (
    <div className="mt-3">
      {/* <MDBIcon fas icon="star" /> */}
      <MDBIcon far icon="star" className="me-2" />
      <span className="font-weight-bold">4 valoraciones</span>
    </div>
  );
}

export default Likes;
