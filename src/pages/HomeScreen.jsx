import React from 'react';

/* components */
import {
  Carousel,
  Description,
  Footer,
  Hero,
  Navbar,
} from '../components/stardui/';

function HomeScreen() {
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
