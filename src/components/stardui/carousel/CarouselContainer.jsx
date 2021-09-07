import React from 'react';

function CarouselContainer({ chidren }) {
  return (
    <article className="container border p-4 text-center mb-4 carousel-width">
      {chidren}
    </article>
  );
}

export default CarouselContainer;
