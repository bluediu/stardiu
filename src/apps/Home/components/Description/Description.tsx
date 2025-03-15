/* Statics */
import DESCRIPTION from '/img/description-img.svg';

export const Description = () => {
  return (
    <section className="container my-5">
      <article className="row">
        <div className="col-lg-6">
          <img
            src={DESCRIPTION}
            alt="description-img"
            className="img-fluid w-75 d-block mx-auto"
          />
        </div>

        <div className="col-lg-6">
          <h2 className="my-4">WELCOME</h2>
          <p className="fs-5">
            We offer the best coffee and service! Enjoy a modern space while
            sipping a delicious cup of coffee with us. Remember, there's nothing
            better than a coffee with style.
          </p>
        </div>
      </article>
    </section>
  );
};
