import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreateOrder } from '../context/actions/order';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from '../helpers/helpPayment';

const initialState = {
  number: '',
  name: '',
  expiry: '',
  cvc: '',
  issuer: '',
  focused: '',
  address: 'Alameda Franklin Delano Roosevelt, San Salvador',
  formData: null,
};

export const usePayment = (toggleShow) => {
  const dispatch = useDispatch();
  const [creditCard, setCreditCard] = useState(initialState);

  const handleInputFocus = ({ target }) => {
    setCreditCard({
      ...creditCard,
      focused: target.name,
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    setCreditCard({
      ...creditCard,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setCreditCard({ ...creditCard, formData });
    dispatch(startCreateOrder(formData));
    toggleShow(false);
  };

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setCreditCard({ issuer });
    }
  };

  return {
    handleCallback,
    handleSubmit,
    handleInputFocus,
    handleInputChange,
    creditCard,
  };
};
