import React from 'react';
import About from '../components/about/About';

/* Components */
import { Footer, Navbar } from '../components/stardui';

function AboutScreen() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default AboutScreen;
