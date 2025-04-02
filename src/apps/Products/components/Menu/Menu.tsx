/* Layouts */
import { ContentLayout } from '../../layouts';

/* Components */
import { ProductList } from '../Product';

export const Menu = () => {
  return (
    <ContentLayout title="Menu">
      <ProductList />
    </ContentLayout>
  );
};
