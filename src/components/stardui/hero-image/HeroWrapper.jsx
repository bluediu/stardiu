import React from 'react';
import './Hero.css';

function HeroWrapper({ children }) {
  return (
    <article className="mask hero-image-position">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </article>
  );
}

export default HeroWrapper;
