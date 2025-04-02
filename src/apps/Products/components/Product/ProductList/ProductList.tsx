import { useEffect, useState } from 'react';

/* Context */
import {
  startListProducts,
  startSetCurrentPage,
} from '@/apps/Products/context';

/* Components */
import { Search } from '../Search';
import { Pagination } from '@/apps/UI/components';

/* Hooks */
import { useAppDispatch, useAppSelector } from '@/hooks';

/* Constants */
import { LIMIT } from '@/apps/Products/constants';
import { ItemsLayout } from '@/apps/Products/layouts';

export const ProductList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const {
    products,
    loading,
    totalPages,
    page: currentPage,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) dispatch(startListProducts({ page, perPage: LIMIT }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);

    dispatch(startSetCurrentPage(page));
    dispatch(startListProducts({ page, perPage: LIMIT }));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Search />

      <ItemsLayout loading={loading} products={products} />

      {!!products.length && (
        <section className="mt-5">
          <Pagination
            totalPages={totalPages}
            onPageChange={onPageChange}
            currentPage={currentPage}
          />
        </section>
      )}
    </>
  );
};
