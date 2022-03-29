import React from 'react';

/* Components */
import DescriptionContainer from './DescriptionContainer';
import DescriptionImage from './DescriptionImage';
import DescriptionText from './DescriptionText';

/* styles */
import './Description.css';

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
