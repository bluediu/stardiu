import React, { useEffect, useState } from 'react';

import { startSearchByName } from '../../../context/actions/product.action';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';

/* components */
import { MDBInput } from 'mdb-react-ui-kit';
import { Footer, Navbar } from '../../stardui';
import Loader from '../../utils/loader/Loader';
import CardItem from '../card/CardItem';
import Tabs from '../../tabs/Tabs';

/* styles */
import '../../menu/card/Card.css';

function Search() {
  const dispatch = useDispatch();

  const [seachTerm, setSeachTerm] = useState();
  const { search, isLoading, noResults } = useSelector(
    (state) => state.products
  );

  const [debouncedValue, setDebouncedValue] = useState('');

  console.log(noResults, typeof noResults);

  // eslint-disable-next-line no-unused-vars
  const [_, cancel] = useDebounce(
    () => {
      setDebouncedValue(seachTerm);
    },
    1500,
    [seachTerm]
  );

  useEffect(() => {
    dispatch(startSearchByName(debouncedValue, 'products'));
  }, [debouncedValue]);

  const handleInput = (e) => {
    setSeachTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />

      <div className="my-3">
        <Tabs />
      </div>
      <div className="container mt-4">
        <form onSubmit={handleSearch}>
          <MDBInput
            label="🔎 Search a product..."
            id="search"
            type="search"
            value={seachTerm}
            onChange={handleInput}
          />
        </form>
      </div>

      {isLoading && <Loader />}

      {/* //TODO: Arreglar buscador */}
      {/*   {!search.results?.length && (
        <p className="text-center h3 my-3">
          There not result for <b>{seachTerm} 😥</b>
        </p>
      )}
 */}
      <div className="container mt-4">
        <section className="cards-grid">
          {search.results?.map((product) => (
            <CardItem key={product._id} {...product} />
          ))}
        </section>
      </div>

      {/* className="fixed-bottom" */}
      <Footer />
    </>
  );
}

export default Search;
