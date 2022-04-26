import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { startGetProductByCategory } from '../../../context/actions/category.action';

/* Components */
import BackButton from '../../utils/BackButton';
import CardItem from '../../menu/card/CardItem';
import Fade from 'react-reveal/Fade';
import { MDBBadge } from 'mdb-react-ui-kit';

/* styles */
import '../../menu/card/Card.css';

import PropTypes from 'prop-types';

function CategoriesContainer({ id, name }) {
  const stylesBtn = {
    position: 'fixed',
    bottom: '1rem',
    right: '0.3rem',
    zIndex: '999',
  };

  const { productsCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetProductByCategory(id));
  }, [dispatch]);

  return (
    <>
      <div style={stylesBtn}>
        <BackButton />
      </div>

      <div className="container">
        <h4 className="mx-2 my-4">
          <Fade right cascade>
            <h2>Categoria</h2>
            <h5 style={{ display: 'inline' }}>
              <MDBBadge className="" color="dark">
                {name.toLowerCase()}
              </MDBBadge>
            </h5>
          </Fade>
        </h4>
      </div>

      <div className="container cards-grid">
        {productsCategory?.map((p) => (
          <Fade bottom key={p._id}>
            <CardItem {...p} />
          </Fade>
        ))}
      </div>
    </>
  );
}

CategoriesContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoriesContainer;
