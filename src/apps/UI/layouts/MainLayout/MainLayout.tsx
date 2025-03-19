/* Components */
import { Footer, Navbar } from '../../components';

/* Interfaces */
import { IReactNodeProps } from '@/interfaces';

export const MainLayout = ({ children }: IReactNodeProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
