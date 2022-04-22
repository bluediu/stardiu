import React from 'react';
import DEFAULT_PIC from '../../../../assets/img/defaultProfile.png';

import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

function OrderHeader({ user, num, date }) {
  // config for dayjs library
  dayjs.extend(advancedFormat);

  const productDate = dayjs(date);

  return (
    <>
      <div className="orders-header-1">
        <b>Orden #{num}</b>
        <span>
          {productDate.format('dddd D MMMM YYYY h:mm A')}
        </span>
      </div>
      <div>
        <div className="avatar">
          <img
            className="avatar__image"
            src={user.img}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = DEFAULT_PIC;
            }}
          />
        </div>
      </div>
    </>
  );
}

export default OrderHeader;
