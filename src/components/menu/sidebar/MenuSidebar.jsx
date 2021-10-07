import React, { useEffect } from 'react';
import { MDBListGroup } from 'mdb-react-ui-kit';

import MenuSidebarItem from './MenuSidebarItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startGetAllCategories } from '../../../context/actions/category.action';
import Loader from '../../utils/loader/Loader';

function MenuSidebar() {
  const dispatch = useDispatch();
  const { records: categories } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(startGetAllCategories());
  }, []);

  /* styles */
  const MenuSidebarStyled = { position: 'sticky', top: '43px' };
  console.log('sidebar', categories);

  return (
    <nav style={MenuSidebarStyled}>
      <section>
        <h4>Categories</h4>

        {!categories.length && (
          <div className="margin-loader">
            <Loader />
          </div>
        )}

        <MDBListGroup>
          {categories.map((category) => (
            <MenuSidebarItem
              key={category._id}
              name={category.name}
            />
          ))}
        </MDBListGroup>
      </section>
    </nav>
  );
}

export default MenuSidebar;
