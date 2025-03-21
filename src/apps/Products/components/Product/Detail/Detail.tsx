import { useEffect, useState } from 'react';

/* Components */
import {
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

import { CartButton } from '../CartButton';
import { Loader } from '@/apps/UI/components';
import { Link, useParams } from 'react-router-dom';

/* Hooks */
import { useDeviceType } from '@/hooks';

/* Services */
import { getProductById } from '@/apps/Products/services';

/* Interfaces */
import { IProduct } from '@/apps/Products/interfaces';

/* Utils */
import { formatPrice } from '@/utils';

/* Constants */
import { productPaths } from '@/apps/Products/constants';

import './Detail.scss';

export const Detail = () => {
  const { id } = useParams();

  const isMobile = useDeviceType();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    (async () => {
      const product = await getProductById(id!);
      setProduct(product);
    })();
  }, [id]);

  if (!product)
    return (
      <div className="mt-5">
        <Loader />;
      </div>
    );

  return (
    <MDBContainer className="mt-5 mb-5">
      <div className="d-flex justify-content-end me-5">
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to={productPaths.MENU}>Menu</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Product detail</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </div>
      <MDBRow>
        <article className="col-lg-6 d-flex justify-content-center">
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            style={{ width: isMobile ? '90%' : '65%' }}
            className="img-fluid shadow-2-strong rounded"
          />
        </article>

        <article className="col-lg-6">
          <div className={`${isMobile ? 'mt-5' : 'm-0'}`}>
            <section className="d-flex align-items-center">
              <h3 className="m-0 product-title">
                {product.name.toLowerCase()}
              </h3>
              <MDBBadge className="mx-2" color="success" light>
                {product.category.name}
              </MDBBadge>
            </section>

            <section className="mt-4">
              <p className="description-size">{product.description}</p>
              <span className="fs-4 price-text">
                {formatPrice(product.price)}
              </span>

              <div className="mt-2">
                <span className="text-secondary">Size</span>
                <select
                  className="form-select w-25 mt-2"
                  // value={selectValue || ''}
                  // onChange={handleSelect}
                >
                  {product.size.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <hr />
              <CartButton />
            </section>
          </div>
        </article>
      </MDBRow>
    </MDBContainer>
  );
};
