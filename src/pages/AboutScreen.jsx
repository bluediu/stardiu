import React from 'react';
import { Footer, Navbar } from '../components/stardui';
import AdminButton from '../components/utils/admin-button/AdminButton';

function AboutScreen() {
  return (
    <div>
      <Navbar />
      <h1>Our company</h1>
      <Footer />
      <AdminButton />
    </div>
  );
}

export default AboutScreen;
