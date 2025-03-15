/* Components */
import { HeroTitle } from './HeroTitle';
import { Fade } from 'react-awesome-reveal';

/* Statics */
import HERO from '/img/hero.svg';
import COFFEE_CUP from '/img/coffee-cup.svg';

import './Hero.scss';

export const Hero = () => {
  return (
    <section
      className="p-5 text-center hero-background bg-image"
      style={{
        backgroundImage: `url("${HERO}")`,
      }}
    >
      <article className="mask" style={{ marginTop: '3.6rem' }}>
        <div className="container">
          <section className="row">
            <div className="col-lg-6 hero-image">
              <Fade duration={1500} triggerOnce>
                <img
                  src={COFFEE_CUP}
                  alt="coffee cup"
                  loading="lazy"
                  className="img-fluid hero-image-size"
                />
              </Fade>
            </div>
            <HeroTitle />
          </section>
        </div>
      </article>
    </section>
  );
};
