/* Layouts */
import { useEffect } from 'react';
import { ContentLayout, ItemsLayout } from '../../layouts';

/* Context */
import { startListProductByCtgy } from '../../context';

/* Components */
import { Link, useParams } from 'react-router-dom';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

/* Hooks */
import { useAppDispatch, useAppSelector } from '@/hooks';

/* Constants */
import { productPaths } from '../../constants';

export const CategoryProducts = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { productsByCategory, loadingProducts } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(startListProductByCtgy(id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentLayout title="Products">
      <div className="d-flex justify-content-end my-2">
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to={productPaths.MENU}>Menu</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <Link to={productPaths.MENU_CATEGORIES}>Categories</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Product detail</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </div>
      <ItemsLayout loading={loadingProducts} products={productsByCategory} />
    </ContentLayout>
  );
};
