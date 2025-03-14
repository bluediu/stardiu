/* Statics */
import LOGO from '/img/logo.svg';

import './MainLoader.scss';

export const MainLoader = () => {
  return (
    <section className="loader-container">
      <div>
        <img src={LOGO} height={60} alt="stardiu logo" />
        <p className="mt-2">Loading...</p>
      </div>

      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
