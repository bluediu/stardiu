import React from 'react';

/* assets */
import DEFAULT_PIC from '../../../../assets/img/defaultProfile.png';

/* config day.js */
import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

import PropTypes from 'prop-types';

function OrderHeader({ user, num, date, isModal = false }) {
  // config for date
  dayjs.extend(advancedFormat);

  const productDate = dayjs(date);

  return (
    <>
      <div className="orders-header-1">
        {!isModal ? <b>Orden #{num}</b> : <b>{user.name}</b>}
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

OrderHeader.propTypes = {
  user: PropTypes.object.isRequired,
  num: PropTypes.number,
  date: PropTypes.string,
  isModal: PropTypes.bool,
};

export default OrderHeader;
