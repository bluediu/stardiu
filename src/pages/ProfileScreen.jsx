import React from 'react';
import Profile from '../components/profile/Profile';

/* Components */
import Footer from '../components/stardui/footer/Footer';
import Navbar from '../components/stardui/navbar/Navbar';

function ProfileScreen() {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}

export default ProfileScreen;
