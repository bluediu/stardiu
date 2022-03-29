import React from 'react';

/* Components */
import DetailsMain from '../components/menu/details/DetailsMain';
import { Footer, Navbar } from '../components/stardui';

function DetailsScreen() {
  return (
    <>
      <Navbar />
      <DetailsMain />
      <Footer />
    </>
  );
}

export default DetailsScreen;
