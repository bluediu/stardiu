import React, { useEffect } from 'react';

/* Components */
import Profile from '../components/profile/Profile';
import { MainLayout } from '../layouts';

function ProfileScreen() {
  useEffect(() => {
    document.title = 'Stardui - Profile';
  }, []);

  return (
    <>
      <MainLayout>
        <Profile />
      </MainLayout>
    </>
  );
}

export default ProfileScreen;
