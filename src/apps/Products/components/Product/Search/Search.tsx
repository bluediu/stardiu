import './Search.scss';
import { SearchForm } from './SearchForm';

export const Search = () => {
  return (
    <section className="search-container">
      <div className="container mt-4 search-box">
        <SearchForm />
      </div>
    </section>
  );
};
