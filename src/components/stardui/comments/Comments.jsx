import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import React from 'react';

/* Components */
import Comment from './Comment';
// import NoComments from './NoComments';

/* styles */
import './Comments.css';

function Comments() {
  // 712
  return (
    <div className="container" style={{ zIndex: '998' }}>
      <MDBCard className="comment-container">
        <MDBCardBody>
          <h4 className="mb-3">Comentarios</h4>

          {/* <NoComments /> */}
          <Comment />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Comments;
