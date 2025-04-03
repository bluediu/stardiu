import { useEffect } from 'react';

/* Context */
import { startListCategories } from '../../context';

/* Layouts */
import { CategoryList } from './CategoryList';

/* Components */
import { Loader } from '@/apps/UI/components';

/* Hooks */
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ContentLayout } from '../../layouts';

export const CategoryNavigation = () => {
  const dispatch = useAppDispatch();

  const { categories, loading } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (!categories.length) dispatch(startListCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentLayout title="Categories">
      <>{loading ? <Loader /> : <CategoryList categories={categories} />}</>
    </ContentLayout>
  );
};
