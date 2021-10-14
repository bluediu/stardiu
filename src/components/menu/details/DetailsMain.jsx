import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { startGetProductById } from '../../../context/actions/product.action';

function DetailsMain() {
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  useEffect(() => {
    const code = pathname.slice(3);

    dispatch(startGetProductById(code));
  }, [pathname]);

  return (
    <main>
      <h1>DETAILS WORK!</h1>
    </main>
  );
}

export default DetailsMain;
