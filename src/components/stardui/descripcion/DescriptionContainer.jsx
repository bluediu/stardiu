import React from 'react';

function DescriptionContainer({ children }) {
  return (
    <section className="container my-5">
      <article className="row">{children}</article>
    </section>
  );
}

export default DescriptionContainer;
