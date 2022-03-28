import React from 'react';

import { Link } from 'react-router-dom';

import CATEGORIES_BG from '../../../assets/img/categories.jpg';
import { MDBBtn, MDBCard, MDBIcon } from 'mdb-react-ui-kit';
import './CategoriesCard.css';

function CategoriesCard({ url, records }) {
  return (
    <>
      {records.map((record) => (
        <MDBCard key={record._id}>
          <div
            style={{
              backgroundImage: `url(${CATEGORIES_BG})`,
            }}
            className="categories-blur-img"
          ></div>

          <div className="categories-info">
            <div className="categories-info-blur">
              <span>{record.name}</span>
            </div>
          </div>

          <div className="categories-link">
            <Link to={`${url}/${record.name}`}>
              <MDBBtn
                size="md"
                outline
                rounded
                color="light"
                className="borders"
              >
                <MDBIcon
                  className="me-2"
                  fas
                  icon="hat-wizard"
                />
                Descubrir
              </MDBBtn>
            </Link>
          </div>
        </MDBCard>
      ))}
    </>
  );
}

export default CategoriesCard;
