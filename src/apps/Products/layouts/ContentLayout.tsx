/* Components */
import { Tabs } from '../components/Tabs';

/* Interfaces */
import { IReactNodeProps } from '@/interfaces';

interface IProps extends IReactNodeProps {
  title: string;
}

export const ContentLayout = ({ children, title }: IProps) => {
  return (
    <main className="container mt-4">
      <Tabs />
      <section className="row">
        <div className="col-12">
          <span className="main-title-color">{title}</span>
          <hr />
          {children}
        </div>
      </section>
    </main>
  );
};
