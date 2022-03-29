import React, { useEffect } from 'react';

/* components */
import {
  Carousel,
  Description,
  Footer,
  Hero,
  Navbar,
} from '../components/stardui/';
import Latest from '../components/stardui/latest/Latest';

function HomeScreen() {
  useEffect(() => {
    document.title = 'Stardui - Home';
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Latest />
      <Carousel />
      <Footer />
    </>
  );
}

export default HomeScreen;
