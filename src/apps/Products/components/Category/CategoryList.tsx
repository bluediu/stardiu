/* Components */
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
  MDBIcon,
} from 'mdb-react-ui-kit';

/* Hooks */
import { useNavigate } from 'react-router-dom';

/* Interfaces */
import { ICategory } from '../../interfaces';

/* Constants */
import { productPaths } from '../../constants';

/* Utils */
import { generateUrl } from '@/utils';

/* Statics */
import CATEGORIES_BG from '/img/categories.jpg';

import './CategoryList.scss';

export const CategoryList = ({ categories }: { categories: ICategory[] }) => {
  const navigate = useNavigate();

  return (
    <div className="items-grid">
      {categories.map((category) => (
        <MDBCard background="dark" className="text-white" key={category._id}>
          <MDBCardImage overlay src={CATEGORIES_BG} alt={category.name} />
          <MDBCardOverlay>
            <section className="categories-info">
              <div className="categories-info-blur">
                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <span className="product-title">
                      {category.name.toLowerCase()}
                    </span>
                  </div>

                  <MDBBtn
                    rounded
                    outline
                    color="white"
                    onClick={() =>
                      navigate(
                        generateUrl(productPaths.CATEGORY_PRODUCTS, {
                          id: category._id,
                        })
                      )
                    }
                  >
                    <MDBIcon fas icon="angle-double-right" className="me-1" />
                    Go
                  </MDBBtn>
                </div>
              </div>
            </section>
          </MDBCardOverlay>
        </MDBCard>
      ))}
    </div>
  );
};
