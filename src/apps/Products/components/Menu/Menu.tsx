/* Components */
import { Tabs } from '../Tabs';
import { ProductList } from '../Product';

export const Menu = () => {
  return (
    <main className="container mt-4">
      <Tabs />
      <section className="row">
        <div className="col-12">
          <span className="main-title-color">Menu</span>
          <hr />
          <ProductList />
        </div>
      </section>
    </main>
  );
};
