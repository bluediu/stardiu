/* Components */
import { Logo } from '../../components/Auth';

/* Interfaces */
import { IReactNodeProps } from '@/interfaces';

import './AuthLayout.scss';

export const AuthLayout = ({ children }: IReactNodeProps) => {
  return (
    <>
      <Logo />
      <main className="auth-page-bg d-flex justify-content-center align-items-center">
        <section className="container">{children}</section>
      </main>
    </>
  );
};
