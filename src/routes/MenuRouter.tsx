import { Route, Routes } from 'react-router-dom';

/* Layouts */
import { MainLayout } from '@/apps/UI/layouts';

/* Pages */
import {
  CategoryPage,
  CategoryProductsPage,
  MenuPage,
  ProductDetail,
} from '@/apps/Products/pages';

/* Constants */
import { productPaths } from '@/apps/Products/constants';

export const MenuRouter = () => {
  return (
    <MainLayout>
      <article>
        <Routes>
          <Route path={'/'} element={<MenuPage />} />
          <Route
            path={productPaths.MENU_DETAIL_PATH}
            element={<ProductDetail />}
          />
          <Route
            path={productPaths.CATEGORY_PRODUCTS_PATH}
            element={<CategoryProductsPage />}
          />
          <Route
            path={productPaths.MENU_CATEGORIES_PATH}
            element={<CategoryPage />}
          />
        </Routes>
      </article>
    </MainLayout>
  );
};
