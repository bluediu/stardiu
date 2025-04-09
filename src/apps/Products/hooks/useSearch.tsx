/* Hooks */
import { useDebounce } from 'react-use';
import { useEffect, useState } from 'react';

/* Services */
import { searchProducts } from '../services';

/* Interfaces */
import { IProduct } from '../interfaces';
import { InputTypeElement } from '@/interfaces';

export const useSearch = () => {
  // Input handling
  const [input, setInput] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  // Data handling
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_] = useDebounce(
    () => {
      setDebouncedSearch(input);
    },
    500,
    [input]
  );

  useEffect(() => {
    (async () => {
      if (!input.length) return setInput('');

      setLoading(true);
      const data = await searchProducts(debouncedSearch);
      setLoading(false);

      setProducts(data!.results);
      setHasSearched(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const handleInput = (e: InputTypeElement) => {
    if (e.target.value) setInput(e.target.value);
    else setInput('');
  };

  const handleShowResult = (value: boolean) => setShowResults(value);

  return {
    input,
    showResults,
    products,
    loading,
    hasSearched,
    handleInput,
    handleShowResult,
  };
};
