/* Components */
import { MDBIcon, MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';

/* Hooks */
import { useLocation, useNavigate } from 'react-router-dom';

/* Constants */
import { productPaths } from '../../constants';

export const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <MDBTabs className="mb-3" fill>
      <MDBTabsItem>
        <MDBTabsLink
          onClick={() => navigate(productPaths.MENU)}
          active={location.pathname === productPaths.MENU}
        >
          <MDBIcon fas icon="book-open" className="me-2" /> All products
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink
          onClick={() => navigate(productPaths.MENU_CATEGORIES)}
          active={location.pathname.startsWith(productPaths.MENU_CATEGORIES)}
        >
          <MDBIcon fas icon="border-all" className="me-2" /> Categories
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>
  );
};
