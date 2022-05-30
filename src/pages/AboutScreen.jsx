import React, { useEffect } from 'react';
import About from '../components/about/About';

/* Components */
import { Footer, Navbar } from '../components/stardui';

function AboutScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Acerca';
  }, []);

  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default AboutScreen;
