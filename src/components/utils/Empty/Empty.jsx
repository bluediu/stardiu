import React from 'react';

/* hooks */
import { useHistory } from 'react-router-dom';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import Fade from 'react-reveal/Fade';
import { ROUTE } from '../../../constants/auth-routes';

/* styles */
import './Empty.css';

function Empty({ title }) {
  let history = useHistory();

  return (
    <div className="empty mt-5">
      <h5 className="text-black-50">
        {title},
        <br />
        comienza viendo nuestros productos
      </h5>

      <Fade>
        <MDBBtn
          rounded
          outline
          color="dark"
          className="mt-3"
          onClick={() => history.push(ROUTE.MENU_BASE)}
        >
          Descubrir
        </MDBBtn>
      </Fade>
    </div>
  );
}

export default Empty;
