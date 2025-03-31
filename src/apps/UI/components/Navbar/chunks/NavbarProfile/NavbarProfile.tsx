import { useState } from 'react';

/* Components */
import { ProfileOptions } from './ProfileOptions';

/* Hooks */
import { useAppSelector } from '@/hooks';

/* Statics */
import DEFAULT_PROFILE from '/img/default-profile.png';

import './Profile.scss';

export const NavbarProfile = () => {
  const { name, img } = useAppSelector((state) => state.auth.user);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="d-flex align-align-items-center align-items-center">
      <span>{name.toLowerCase()}</span>

      <div className="toast-wrapper cursor-pointer" onClick={toggleMenu}>
        <img
          src={img || DEFAULT_PROFILE}
          alt={name || 'Profile Avatar'}
          className="img-fluid profile-avatar"
          onError={(e) => {
            if (e.currentTarget.src !== DEFAULT_PROFILE) {
              e.currentTarget.src = DEFAULT_PROFILE;
            }
          }}
        />

        {isOpen && <ProfileOptions />}
      </div>
    </section>
  );
};
