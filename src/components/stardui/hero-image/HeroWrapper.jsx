import React from 'react';

function HeroWrapper({ children }) {
  return (
    <article className="mask">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </article>
  );
}

export default HeroWrapper;
