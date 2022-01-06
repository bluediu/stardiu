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

      <section className="container">
        <h1>los ultimos productos recomendados</h1>
        <div className="row">
          <div className="col-3">LOOO</div>
          <div className="col-3">LOOO</div>
          <div className="col-3">LOOO</div>
          <div className="col-3">LOOO</div>
        </div>
      </section>

      <Carousel />
      <Footer />
    </>
  );
}

export default HomeScreen;
