import React from 'react';
import LOGO from '../../../assets/img/stardiuLogo.svg';

/* Components */
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBBtn,
} from 'mdb-react-ui-kit';
import AuthButtons from '../../stardui/auth/AuthButtons';
import AuthLoginBtn from '../../stardui/auth/AuthLoginBtn';
import AuthSignInBtn from '../../stardui/auth/AuthSignInBtn';

/* styles */
import './AuthModal.css';

function AuthModal({ showModal, setShowModal, toggleShow }) {
  return (
    <MDBModal
      show={showModal}
      setShow={setShowModal}
      tabIndex="-1"
      onClick={toggleShow}
    >
      <MDBModalDialog onClick={(e) => e.stopPropagation()}>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Crear una cuenta</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <section className="auth-modal">
              <div className="auth-modal-info">
                <h5>Inicia ahora</h5>
                <img
                  src={LOGO}
                  alt="stardui - logo"
                  className="auth-modal-img"
                />
              </div>
              <div>
                <AuthButtons>
                  <div className="auth-modal-btn">
                    <AuthLoginBtn />
                    <AuthSignInBtn />
                  </div>
                </AuthButtons>
              </div>
            </section>
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

export default AuthModal;
