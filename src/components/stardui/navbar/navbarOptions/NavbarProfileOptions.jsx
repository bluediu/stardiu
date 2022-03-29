import React from 'react';

/* Components */
import Flip from 'react-reveal/Flip';
import NavbarProfileOptionsBody from './NavbarProfileOptionsBody';
import NavbarProfileOptionsHeader from './NavbarProfileOptionsHeader';

/* styles */
import './NavbarOptions.css';

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
