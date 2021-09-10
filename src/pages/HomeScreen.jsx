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
    <main>
      <Navbar />
      <Hero />
      <Description />
      <Carousel />
      <Footer />
    </main>
  );
}

export default HomeScreen;
