import React, { useEffect, useState } from 'react';
import {
  Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesCard from './CategoriesCard';
import Fade from 'react-reveal/Fade';
import '../menu/card/Card.css';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { startGetAllCategories } from '../../context/actions/category.action';
import CardItem from '../menu/card/CardItem';

function CategoriesNavigation() {
  const { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const { records, isLoading } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(startGetAllCategories());
  }, []);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <MDBSpinner color="dark">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );

  return (
    <div>
      {/*  <li>
        <Link to={`${url}/hot-coffes`}> ver cate</Link>
      </li> */}

      <Switch>
        <Route exact path={`${path}/`}>
          <Fade right cascade>
            <h2 className="mt-5">Categorias</h2>
          </Fade>

          <hr />
          <section className="cards-grid categories-mg">
            <CategoriesCard url={url} records={records} />
          </section>
        </Route>

        {/* <CardItem
            {..record}
            /> */}

        {records?.map((record) => (
          <Route
            key={record._id}
            exact
            path={`${path}/${record.name}`}
          >
            <h3>{record.name}</h3>
          </Route>
        ))}

        <Redirect to={`${path}`} />
      </Switch>
    </div>
  );
}

export default CategoriesNavigation;
