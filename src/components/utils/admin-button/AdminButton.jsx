import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ROUTE } from '../../../constants/auth-routes';

/*eslint-env node, mocha */
function AdminButton() {
  const { role } = useSelector((state) => state.auth);
  let history = useHistory();

  return (
    <>
      {role === process.env.REACT_APP_ROLE && (
        <div className="fixed-bottom ms-3 mb-3">
          <MDBBtn
            floating
            size="lg"
            tag="a"
            color="black"
            onClick={() => history.push(ROUTE.ADMIN_DASHBOARD)}
          >
            <MDBIcon fas icon="tools" />
          </MDBBtn>
        </div>
      )}
    </>
  );
}

export default AdminButton;
