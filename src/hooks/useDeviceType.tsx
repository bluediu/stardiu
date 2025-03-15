/* Hooks */
import { useMediaQuery } from 'react-responsive';

export const useDeviceType = () => {
  return useMediaQuery({ query: '(max-width: 990px)' });
};
