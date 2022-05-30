import React from 'react';

import DEFAULT_PIC from '../../../../assets/img/defaultProfile.png';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';

/* styles */
import './Comment.css';

function Comment() {
  const { img, checking } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ comment }) => {
    console.log(comment);
  };

  console.log(errors);

  return (
    <div className="d-flex comment">
      <div className="avatar me-3">
        <img
          className="avatar__image"
          src={img || DEFAULT_PIC}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = DEFAULT_PIC;
          }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          style={{ resize: 'none' }}
          className="form-control active comment-textarea"
          placeholder="Escribe un comentario..."
          rows={4}
          {...register('comment', {
            required: true,
            maxLength: 200,
            minLength: 6,
          })}
        />

        {errors.comment && (
          <div
            className="form-text"
            style={{ color: '#E74C3C' }}
          >
            {errors.comment.type === 'minLength'
              ? 'tu comentario es muy corto'
              : 'Has sobre pasado el maximo de caracteres o comentario no válido'}
          </div>
        )}

        <MDBBtn
          color="dark"
          className="my-2"
          size="sm"
          disabled={errors.comment || checking === true}
        >
          Publicar
        </MDBBtn>
      </form>
    </div>
  );
}

export default Comment;
