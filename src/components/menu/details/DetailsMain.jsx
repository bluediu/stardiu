import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { startGetProductById } from '../../../context/actions/product.action';

/* Components */
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import BackButton from '../../utils/BackButton';
import Loader from '../../utils/loader/Loader';
import DetailsImg from './DetailsImg';
import DetailsInfo from './DetailsInfo';

/* styles */
import './Details.css';

function DetailsMain() {
  const dispatch = useDispatch();

  const { detailsData: product, isLoading } = useSelector(
    (state) => state.products
  );

  let { pathname } = useLocation();

  useEffect(() => {
    const code = pathname.slice(3);

    dispatch(startGetProductById(code.toString()));

    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <>
      <MDBContainer className="mt-5 mb-5">
        <div className="pad-abs-btn"></div>
        <MDBRow>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <article className="col-lg-6 d-flex justify-content-center">
                <DetailsImg img={product?.img} />
              </article>

              <article className="col-lg-6">
                <DetailsInfo {...product} />
                <div className="back-btn-position">
                  <BackButton />
                </div>
              </article>
            </>
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default DetailsMain;
