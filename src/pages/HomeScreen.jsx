import React, { useEffect } from 'react';

/* components */
import {
  Carousel,
  Description,
  Footer,
  Hero,
  Navbar,
} from '../components/stardui/';

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
    </>
  );
}

export default HomeScreen;
