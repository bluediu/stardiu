/* Layouts */
import { MainLayout } from '@/apps/UI/layouts';

/* Components */
import { Description, Hero, CarouselServices } from '../../components';

/* Hooks */
import { useDynamicPageTitle } from '@/hooks';

export const HomePage = () => {
  useDynamicPageTitle('Home');

  return (
    <MainLayout>
      <Hero />
      <Description />
      <CarouselServices />
    </MainLayout>
  );
};
