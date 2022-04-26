import React from 'react';

/* Components */
import OrderCard from '../order/OrderCard/OrderCard';
import { Avatar } from './AvatarCard';

/* styles */
import './Profile.css';

function Profile() {
  return (
    <main className="container mt-5 d-flex flex-column">
      <section className="avatar-section">
        <Avatar />
      </section>

      <section>
        <h4 className="text-black-50 mx-3">Lista de ordenes</h4>

        <OrderCard />
      </section>
    </main>
  );
}

export default Profile;
