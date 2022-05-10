import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';
import React from 'react';

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
