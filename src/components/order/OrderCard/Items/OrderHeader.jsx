import React from 'react';

function OrderHeader() {
  return (
    <>
      <div className="orders-header-1">
        <b>Orden #1</b>
        <span>Jueves 16 de Abril 2022</span>
      </div>
      <div>
        <div className="avatar">
          <img
            className="avatar__image"
            src="https://lh3.googleusercontent.com/a-/AOh14GgKEHB1fB40oxf-Ws58DhZrm29UzqzKs9JGX2DA=s96-c"
            alt="profile-pic"
          />
        </div>
      </div>
    </>
  );
}

export default OrderHeader;
