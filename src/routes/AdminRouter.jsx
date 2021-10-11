import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import CrudCategories from '../components/admin/components/CrudCategories';
import CrudCustomers from '../components/admin/components/CrudCustomers';
import CrudProducts from '../components/admin/components/CrudProducts';
import CrudHeader from '../components/admin/shared/CrudHeader';
import { ROUTE } from '../constants/auth-routes';

function AdminRouter() {
  return (
    <>
      <CrudHeader />

      <main className="container">
        <h3>Dashboard | DATA</h3>
        <article>
          <Switch>
            <Route
              exact
              path={ROUTE.ADMIN_PRODUCTS}
              component={CrudProducts}
            />
            <Route
              exact
              path={ROUTE.ADMIN_CUSTOMERS}
              component={CrudCustomers}
            />
            <Route
              exact
              path={ROUTE.ADMIN_CATEGORIES}
              component={CrudCategories}
            />

            <Redirect to={ROUTE.ADMIN_PRODUCTS} />
          </Switch>
        </article>
      </main>
    </>
  );
}

export default AdminRouter;
