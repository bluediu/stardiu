import React, { useEffect, useState } from 'react';

/* assets */
import DEFAULT_PIC from '../../../assets/img/defaultProfile.png';

/* libs */
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

/* hooks */
import { useSelector } from 'react-redux';

/* Components */
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import ProfileModal from '../ProfileModal/ProfileModal';
import AvatarForm from '../AvatarForm/AvatarForm';
import SettingForm from '../SettingForm/SettingForm';

function Avatar() {
  const { name, img } = useSelector((state) => state.auth);

  /* states */
  const [titleModal, setTitleModal] = useState('');
  const [clidrenModal, setClidrenModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);

  /* JWT: check out for google acounts */
  // read the previous token from local storage
  const token = localStorage.getItem('star-token');
  const decoded = jwt_decode(token);

  /* Check out for google user. */
  useEffect(() => {
    setGoogleUser(decoded.google);
  }, [decoded]);

  /**
   * Handle options for profile modal
   * @param {'avatar' | 'settings'} type what type of modal do you want to show?
   */
  const handleModal = (type) => {
    switch (type) {
      case 'avatar':
        setTitleModal('Cambiar foto de perfil');
        setClidrenModal(
          <AvatarForm setShowModal={setShowModal} />
        );
        setShowModal(true);
        break;

      case 'settings':
        setTitleModal('Configuraciones');
        setClidrenModal(
          <SettingForm
            setShowModal={setShowModal}
            setTitleModal={setTitleModal}
            setClidrenModal={setClidrenModal}
          />
        );
        setShowModal(true);
        break;

      default:
        break;
    }
  };

  return (
    <MDBCard
      style={{
        boxShadow: '0 2px 9px rgba(0, 0, 0, 0.2)',
      }}
      className="avatar-card mb-4"
    >
      <MDBCardBody>
        <div className="avatar-profile">
          <img
            onClick={() => {
              googleUser !== true && handleModal('avatar');
            }}
            className="avatar-profile__image pointer"
            src={img}
            loading="lazy"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = DEFAULT_PIC;
            }}
          />
        </div>
        <span className="avatar-name">{name}</span>
      </MDBCardBody>

      <div
        className={`avatar-setting ${
          googleUser && 'avatar-google'
        }`}
        onClick={() => {
          googleUser !== true && handleModal('settings');

          googleUser &&
            Swal.fire(
              'Aclaración',
              'Tu cuenta esta asocida con google por lo tanto no es permido hacer cambio en tu perfil por politicas de privacidad.',
              'warning'
            );
        }}
      >
        <MDBIcon fas icon="pen" />
      </div>

      <ProfileModal
        titleModal={titleModal}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        {clidrenModal}
      </ProfileModal>
    </MDBCard>
  );
}

export default Avatar;
