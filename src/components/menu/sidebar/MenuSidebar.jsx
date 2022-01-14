import React, { useEffect } from 'react';
import { MDBListGroup } from 'mdb-react-ui-kit';

import MenuSidebarItem from './MenuSidebarItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startGetAllCategories } from '../../../context/actions/category.action';
import Loader from '../../utils/loader/Loader';

function MenuSidebar() {
  const dispatch = useDispatch();
  const { records: categories, isLoading } = useSelector(
    (state) => state.categories
  );

  //TODO: COnvertir a categorias
  useEffect(() => {
    dispatch(startGetAllCategories());
  }, []);

  /* styles */
  const MenuSidebarStyled = { position: 'sticky', top: '43px' };

  return (
    <nav style={MenuSidebarStyled}>
      <section>
        <h4>Categories</h4>

        {isLoading && (
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
