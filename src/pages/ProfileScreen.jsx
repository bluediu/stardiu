import React, { useEffect } from 'react';

/* Components */
import Profile from '../components/profile/Profile';
import Footer from '../components/stardui/footer/Footer';
import Navbar from '../components/stardui/navbar/Navbar';

function ProfileScreen() {
  useEffect(() => {
    document.title = 'Stardui - Profile';
  }, []);

  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}

export default ProfileScreen;
