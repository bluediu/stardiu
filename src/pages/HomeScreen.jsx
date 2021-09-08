import React from 'react';
import Hero from '../components/stardui/hero-image/Hero';
import Navbar from '../components/stardui/navbar/Navbar';
import Carousel from '../components/stardui/carousel/Carousel';
import Description from '../components/stardui/descripcion/Description';
import Footer from '../components/stardui/footer/Footer';

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomeScreen;
