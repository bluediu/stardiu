/* Components */
import { Fade } from 'react-awesome-reveal';
import { Loader } from '@/apps/UI/components';
import { ProductItem } from '../components/Product';

/* Interfaces */
import { IProduct } from '../interfaces';

interface IProps {
  loading: boolean;
  products: IProduct[];
}

export const ItemsLayout = ({ loading, products }: IProps) => {
  return (
    <>
      {loading && <Loader />}

      <section className="items-grid">
        {products.map((product) => (
          <Fade triggerOnce key={product._id}>
            <ProductItem product={product} />
          </Fade>
        ))}
      </section>
    </>
  );
};
