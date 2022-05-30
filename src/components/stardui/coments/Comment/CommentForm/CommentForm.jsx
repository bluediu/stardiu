import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

/* Components */
import { useForm } from 'react-hook-form';

function CommentForm({ checking }) {
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
        <div className="form-text" style={{ color: '#E74C3C' }}>
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
  );
}

export default CommentForm;
