import React from 'react';

/* Components */
import {
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';

function ProfileModal({
  children,
  showModal,
  setShowModal,
  titleModal,
}) {
  return (
    <div>
      <MDBModal
        tabIndex="-1"
        show={showModal}
        setShow={setShowModal}
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{titleModal}</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody
              style={{
                margin: '0px',
                padding: '0px',
              }}
            >
              {children}
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default ProfileModal;
