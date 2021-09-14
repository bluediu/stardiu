import React from 'react';
import Card from './card/Card';
import MenuSidebar from './sidebar/MenuSidebar';

function MenuContainerGrid() {
  return (
    <main className="container-fluid mt-4">
      <section className="row">
        <div className="col-lg-4">
          <MenuSidebar />
        </div>

        <div className="col-lg-8">
          <Card />
        </div>
      </section>
    </main>
  );
}

export default MenuContainerGrid;
