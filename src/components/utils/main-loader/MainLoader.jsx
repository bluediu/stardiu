import React from 'react';
import './MainLoader.css';

function MainLoader() {
  return (
    <section className="loader-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default MainLoader;
