import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import MenuSidebar from './sidebar/MenuSidebar';
import { useWindowSize } from 'react-use';

function MenuContainerGrid() {
  const { width } = useWindowSize();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    width < 976 ? setVisible(false) : setVisible(true);
  }, [width]);

  return (
    <main className="container-fluid mt-4">
      <section className="row">
        {visible && (
          <div className="col-lg-3">
            <MenuSidebar />
          </div>
        )}

        <div className={`${visible ? 'col-lg-9' : 'col-12'}`}>
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
