import React, { useState } from 'react';
import { useSelector } from 'react-redux';

/* Components */
import Avatar from '../../utils/Avatar';
import NavbarProfileOptions from './navbarOptions/NavbarProfileOptions';

function NavbarProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, img } = useSelector((state) => state.auth);

  const handleShowProfileOptions = () => setIsOpen(!isOpen);

  return (
    <section className="d-flex align-items-center align-items-center">
      <span className="fw-bold">{name}</span>

      <div
        onClick={handleShowProfileOptions}
        className="toast-wrapper"
        style={{ cursor: 'pointer' }}
      >
        <Avatar img={img} name={name} />

        {isOpen && <NavbarProfileOptions />}
      </div>
    </section>
  );
}

export default NavbarProfile;
