import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function HeroTitle() {
  let history = useHistory();

  /* styles */
  const heroTitleStyled = {
    letterSpacing: '3px',
    paddingTop: '4.8rem',
    paddingLeft: '2rem',
  };

  return (
    <div
      className="col-lg-6 hero-back hero-title-center"
      style={heroTitleStyled}
    >
      <div>
        <Fade>
          <span className="d-block fw-bold font-title">THE</span>

          <span className="d-block fw-bold font-title" id="test">
            STYLISH
          </span>
        </Fade>
        <Fade right cascade>
          <span className="d-block fw-bold font-title green-text">
            COFFE
          </span>
        </Fade>
      </div>

      <div className="discover-btn-center">
        <Fade delay={1000}>
          <MDBBtn
            rounded
            outline
            color="dark"
            className="mt-3"
            onClick={() => history.push(ROUTE.MENU_BASE)}
          >
            Discover
          </MDBBtn>
        </Fade>
      </div>
    </div>
  );
}

export default HeroTitle;
