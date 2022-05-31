import React from 'react';

/* assets */
import DEFAULT_PIC from '../../../../assets/img/defaultProfile.png';

/* Redux hooks */
import { useSelector } from 'react-redux';

/* Components */
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

function Comment() {
  const { img, checking } = useSelector((state) => state.auth);

  return (
    <>
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

        <CommentForm checking={checking} />
      </div>

      <CommentItem title={'Excelente cafe, muy recomendado'} />
      <CommentItem
        title={'Cafe de muy buena calidad, lo recomiendo'}
      />
      <CommentItem title={'No esta nada mal'} />
      <CommentItem
        title={'Lo recomiendo, pero esta un poco caro'}
      />
    </>
  );
}

export default Comment;
