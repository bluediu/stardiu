import { useState } from 'react';
import { useSelector } from 'react-redux';

/**
 *
 * @param {number} value: initial values of state
 * @param {{count: number, maxCount: number}} initialValues: count: add on <number>, maxCount: max number
 * @returns
 */
export const useCounter = ({ value = 0, initialValues }) => {
  const { updatingQt } = useSelector(
    (state) => state.shoppingCart
  );

  const [counter, setCounter] = useState(
    initialValues?.count ?? value
  );

  /**
   * @param {number} value
   */
  const increaseBy = (value) => {
    const newValue = initialValues?.maxCount
      ? Math.min(
          Math.max(counter + value, 1),
          initialValues.maxCount
        )
      : Math.max(counter + value, 1);

    setCounter(newValue);
  };

  return {
    isMaxCountReached:
      !!initialValues?.maxCount &&
      initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    counter,
    increaseBy,
    updatingQt,
  };
};
