import { MDBIcon, MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';

export const Tabs = () => {
  return (
    <MDBTabs className="mb-3" fill>
      <MDBTabsItem>
        <MDBTabsLink
          // onClick={() => handleIconsClick('tab1')}
          active={true}
        >
          <MDBIcon fas icon="book-open" className="me-2" /> All products
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink
        // onClick={() => handleIconsClick('tab2')}
        // active={iconsActive === 'tab2'}
        >
          <MDBIcon fas icon="border-all" className="me-2" /> Categories
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>
  );
};
