import { useNavigate } from 'react-router-dom';

/* Components */
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBRipple,
} from 'mdb-react-ui-kit';
import { CartButton } from '../CartButton';

/* Interfaces */
import { IProduct } from '@/apps/Products/interfaces';

/* Constants */
import { productPaths } from '@/apps/Products/constants';

/* Utils */
import { formatPrice, generateUrl } from '@/utils';

/* Statics */
import DEFAULT_PRODUCT from '/img/default-product.webp';

export const ProductItem = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();

  const { _id, name, img, category, price, description } = product;

  const truncatedName = name.length > 15 ? name.slice(0, 15) + '...' : name;

  const truncatedDescription =
    description.length > 65 ? description.slice(0, 65) + '...' : description;

  return (
    <MDBCard
      style={{
        boxShadow: '0 2px 9px rgba(0, 0, 0, 0.2)',
      }}
    >
      <MDBRipple className="cursor-pointer">
        <MDBCardImage
          src={img || DEFAULT_PRODUCT}
          position="top"
          alt={name}
          onClick={() =>
            navigate(generateUrl(productPaths.MENU_DETAIL, { id: _id }))
          }
        />
      </MDBRipple>

      <MDBCardBody>
        <section className="d-flex justify-content-between">
          <MDBCardTitle className="product-title">
            {truncatedName.toLocaleLowerCase()}
          </MDBCardTitle>
          <div>
            <MDBBadge color="success" light>
              {category.name}
            </MDBBadge>
          </div>
        </section>

        <MDBCardText>
          <small className="fw-lighter">{truncatedDescription}</small>
        </MDBCardText>

        <section className="d-flex justify-content-between align-align-items-center">
          <div className="d-flex align-items-center">
            <span className="price-text">{formatPrice(price)} USD</span>
          </div>

          <CartButton />
        </section>
      </MDBCardBody>
    </MDBCard>
  );
};
