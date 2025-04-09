/* Components */
import { Fade } from 'react-awesome-reveal';
import { MDBBadge, MDBListGroupItem } from 'mdb-react-ui-kit';

/* Hooks */
import { useNavigate } from 'react-router-dom';

/* Interfaces */
import { IProduct } from '@/apps/Products/interfaces';

/* Constants */
import { productPaths } from '@/apps/Products/constants';

/* Utils */
import { generateUrl } from '@/utils';

export const SearchList = ({ products }: { products: IProduct[] }) => {
  const navigate = useNavigate();

  return (
    <>
      {products.map((product) => (
        <Fade triggerOnce key={product._id}>
          <MDBListGroupItem className="item-product-main">
            <section className="item-product">
              <img
                className="item-image"
                src={product.img}
                alt={product.name}
              />

              <article className="item-info">
                <div
                  className="main-text"
                  onClick={() =>
                    navigate(
                      generateUrl(productPaths.MENU_DETAIL, { id: product._id })
                    )
                  }
                >
                  {product.name}
                </div>

                <MDBBadge color="success" light>
                  {product.category.name}
                </MDBBadge>
              </article>
            </section>
          </MDBListGroupItem>
        </Fade>
      ))}
    </>
  );
};
