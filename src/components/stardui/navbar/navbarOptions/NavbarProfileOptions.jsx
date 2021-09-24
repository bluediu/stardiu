import React from 'react';
import Flip from 'react-reveal/Flip';

import './NavbarOptions.css';
import NavbarProfileOptionsBody from './NavbarProfileOptionsBody';
import NavbarProfileOptionsHeader from './NavbarProfileOptionsHeader';

function NavbarProfileOptions() {
  return (
    <>
      <Flip top>
        <article className="toast show toast-show mt-3">
          <NavbarProfileOptionsHeader />
          <NavbarProfileOptionsBody />
        </article>
      </Flip>
    </>
  );
}

export default NavbarProfileOptions;
