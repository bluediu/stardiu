/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import { Fade } from 'react-awesome-reveal';

export const HeroTitle = () => {
  /* styles */
  const heroTitleStyled = {
    letterSpacing: '3px',
    paddingTop: '5.6rem',
    paddingLeft: '2rem',
  };

  return (
    <section className="col-lg-6 hero-info-container" style={heroTitleStyled}>
      <div>
        <Fade triggerOnce>
          <span className="d-block fw-bold hero-font-title">THE</span>
          <span className="d-block fw-bold hero-font-title">COFFEE WITH</span>
        </Fade>
        <span className="d-block fw-bold hero-font-title hero-secondary-text">
          <Fade cascade direction="right" duration={500} triggerOnce>
            STYLE
          </Fade>
        </span>
      </div>

      <div>
        <Fade delay={700} triggerOnce>
          <MDBBtn rounded color="dark" className="mt-3">
            Discover
          </MDBBtn>
        </Fade>
      </div>
    </section>
  );
};
