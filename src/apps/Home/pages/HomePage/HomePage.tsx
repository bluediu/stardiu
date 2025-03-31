/* Layouts */
import { MainLayout } from '@/apps/UI/layouts';

/* Components */
import { Latest } from '@/apps/Products/components/Product';
import { Description, Hero, CarouselServices } from '../../components';

/* Hooks */
import { useDynamicPageTitle } from '@/hooks';

export const HomePage = () => {
  useDynamicPageTitle('Home');

  return (
    <MainLayout>
      <Hero />
      <Description />
      <Latest />
      <CarouselServices />
    </MainLayout>
  );
};
