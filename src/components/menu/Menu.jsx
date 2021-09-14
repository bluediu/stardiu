import React from 'react';
import MenuContainerGrid from './MenuContainerGrid';
import InputSearch from './search/InputSearch';

function Menu() {
  return (
    <div>
      <InputSearch />
      <MenuContainerGrid />
    </div>
  );
}

export default Menu;
