import React from 'react';
import Card from './card/Card';
import MenuSidebar from './sidebar/MenuSidebar';

function MenuContainerGrid() {
  return (
    <main className="container-fluid mt-4">
      <section className="row">
        <div className="col-lg-3">
          <MenuSidebar />
        </div>

        <div className="col-lg-9">
          <div className="ms-4">
            <h1>Menu</h1>
            <hr />
          </div>
          <Card />
        </div>
      </section>
    </main>
  );
}

export default MenuContainerGrid;
