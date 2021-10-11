import React, { useEffect } from 'react';

/* components */
import {
  Carousel,
  Description,
  Footer,
  Hero,
  Navbar,
} from '../components/stardui/';
import AdminButton from '../components/utils/admin-button/AdminButton';

function HomeScreen() {
  useEffect(() => {
    document.title = 'Stardui - Home';
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Carousel />
      <Footer />
      <AdminButton />
    </>
  );
}

export default HomeScreen;
