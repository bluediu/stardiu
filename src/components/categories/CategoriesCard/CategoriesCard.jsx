import React from 'react';
import CATEGORIES_BG from '../../../assets/img/categories.jpg';

import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBIcon } from 'mdb-react-ui-kit';

import './CategoriesCard.css';

function CategoriesCard({ url }) {
  return (
    <MDBCard>
      <div
        style={{
          backgroundImage: `url(${CATEGORIES_BG})`,
        }}
        className="categories-blur-img"
      ></div>

      <div className="categories-info">
        <div className="categories-info-blur">
          <span>Hot Cofffes</span>
        </div>
      </div>

      <div className="categories-link">
        <Link to={`${url}/hot-coffes`}>
          <MDBBtn
            size="md"
            outline
            rounded
            color="light"
            className="borders"
          >
            <MDBIcon className="me-2" fas icon="hat-wizard" />
            Descubrir
          </MDBBtn>
        </Link>
      </div>
    </MDBCard>
  );
}

export default CategoriesCard;
