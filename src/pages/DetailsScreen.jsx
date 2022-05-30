import React, { useEffect } from 'react';

/* Components */
import DetailsMain from '../components/menu/details/DetailsMain';
import { Footer, Navbar } from '../components/stardui';
import Comments from '../components/stardui/coments/Comments';

function DetailsScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Detalles';
  }, []);

  return (
    <>
      <Navbar />
      <DetailsMain />
      <Comments />
      <Footer />
    </>
  );
}

export default DetailsScreen;
