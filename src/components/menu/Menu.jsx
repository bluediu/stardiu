import React from 'react';
import Card from './card/Card';
import Tabs from '../tabs/Tabs';

function MenuContainerGrid() {
  return (
    <main className="container-fluid mt-4">
      <Tabs />
      <section className="row">
        <div className="col-12">
          <div className="ms-4">
            <h1>Menu</h1>
            <small>Colocar filtros</small>
            <hr />
          </div>
          <Card />
        </div>
      </section>
    </main>
  );
}

export default MenuContainerGrid;
