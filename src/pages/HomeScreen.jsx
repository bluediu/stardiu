import React, { useEffect } from 'react';

/* components */
import {
  Carousel,
  Description,
  Hero,
} from '../components/stardui/';
import Latest from '../components/stardui/latest/Latest';
import { MainLayout } from '../layouts';

function HomeScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Inicio';
  }, []);

  return (
    <>
      <MainLayout>
        <Hero />
        <Description />
        <Latest />
        <Carousel />
      </MainLayout>
    </>
  );
}

export default HomeScreen;
