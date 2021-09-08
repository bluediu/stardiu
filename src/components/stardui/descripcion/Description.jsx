import React from 'react';

import './Description.css';
import DescriptionContainer from './DescriptionContainer';
import DescriptionImage from './DescriptionImage';
import DescriptionText from './DescriptionText';

function Description() {
  return (
    <div>
      <DescriptionContainer>
        <DescriptionImage />
        <DescriptionText />
      </DescriptionContainer>
    </div>
  );
}

export default Description;
