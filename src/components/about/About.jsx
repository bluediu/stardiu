import React from 'react';

import ABOUT from '../../assets/img/about.svg';

/* styles */
import './About.css';

function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-2 text-muted">Stardiu</h1>
      <img
        src={ABOUT}
        alt="about"
        className="img-fluid shadow-4 about-img"
      />
      <div className="about-1">
        <h2>Nuestra empresa</h2>

        <p className="fw-light">
          Solo la empresa lider en la producción y venta de cafe
          ofreciendo productos de calidad y el mejor servicio a
          nuestros cliente y consumidores siempre buscando
          ofrecer los mejores productos en el mercado.
        </p>
      </div>

      <div className="about-2">
        <h2>Nuestro cafè</h2>
        <p className="fw-light">
          Se necesitan muchas manos para elaborar la taza de café
          perfecta, desde los agricultores que cuidan las cerezas
          de café maduras hasta los maestros tostadores que
          extraen lo mejor de cada grano y el barista que lo
          sirve con cuidado. Estamos comprometidos con los más
          altos estándares de calidad y servicio, abrazando
          nuestra herencia mientras innovamos para crear nuevas
          experiencias para saborear.
        </p>
      </div>
    </div>
  );
}

export default About;
