import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */
import { MDBBadge, MDBListGroupItem } from 'mdb-react-ui-kit';

function SearchResult({ product }) {
  let history = useHistory();

  return (
    <MDBListGroupItem className="item-product-main">
      <section className="item-product">
        <div>
          <img className="item-image" src={product.img} alt="" />
        </div>

        <div className="item-info">
          <div
            className="main-text"
            onClick={() => history.push(`/d/${product._id}`)}
          >
            {product.name}
          </div>

          <MDBBadge color="dark">
            {product.category.name}
          </MDBBadge>
        </div>
      </section>
    </MDBListGroupItem>
  );
}

export default SearchResult;
