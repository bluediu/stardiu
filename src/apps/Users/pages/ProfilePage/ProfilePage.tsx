/* Layouts */
import { MainLayout } from '@/apps/UI/layouts';

/* Components */
import { Profile } from '../../components/Profile';

/* Hooks */
import { useDynamicPageTitle } from '@/hooks';

export const ProfilePage = () => {
  useDynamicPageTitle('Profile');

  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
};
