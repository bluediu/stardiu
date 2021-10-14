import React from 'react';
import DetailsMain from '../components/menu/details/DetailsMain';
import { Footer, Navbar } from '../components/stardui';
import AdminButton from '../components/utils/admin-button/AdminButton';

function DetailsScreen() {
  return (
    <>
      <Navbar />
      <DetailsMain />
      <Footer />
      <AdminButton />
    </>
  );
}

export default DetailsScreen;
