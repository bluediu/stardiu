import React from 'react';

/* styles */
import './Hero.css';

function HeroWrapper({ children }) {
  return (
    <article
      className="mask hero-image-position"
      style={{ marginTop: '3.6rem' }}
    >
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </article>
  );
}

export default HeroWrapper;
