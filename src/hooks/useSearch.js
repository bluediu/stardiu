import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';
import { startSearchByName } from '../context/actions/search.action';

export const useSearch = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(null);
  const [showList, setShowList] = useState(false);

  /* Redux */
  const { results, loading, thereAreProducts } = useSelector(
    (state) => state.search
  );

  // eslint-disable-next-line no-unused-vars
  const [_, cancel] = useDebounce(
    () => {
      setDebouncedSearch(inputText);
    },
    1500,
    [inputText]
  );

  useEffect(() => {
    if (inputText?.length >= 1) {
      dispatch(startSearchByName(debouncedSearch, 'products'));
    }
  }, [debouncedSearch]);

  const handleInput = (e) => {
    if (e.target.value) {
      setInputText(e.target.value);
    } else {
      setInputText(null);
    }
  };

  return {
    loading,
    setShowList,
    inputText,
    handleInput,
    showList,
    results,
    thereAreProducts,
  };
};
