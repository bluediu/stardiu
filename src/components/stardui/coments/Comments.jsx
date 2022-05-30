import React from 'react';

/* Components */
import Comment from './Comment';
import NoComments from './NoComments';

/* styles */
import './Comments.css';
import { useForm } from 'react-hook-form';

function Comments() {
  return (
    <section className="container comment-container p-3">
      <h4 className="mb-3">Comentarios</h4>

      {/* <NoComments /> */}

      <Comment />
    </section>
  );
}

export default Comments;
