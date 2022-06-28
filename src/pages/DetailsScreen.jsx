import React, { useEffect } from 'react';

/* Components */
import DetailsMain from '../components/menu/details/DetailsMain';
// import Comments from '../components/stardui/comments/Comments';
import { MainLayout } from '../layouts';

function DetailsScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Detalles';
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <MainLayout>
        <DetailsMain />
        {/* <Comments /> */}
      </MainLayout>
    </div>
  );
}

export default DetailsScreen;
