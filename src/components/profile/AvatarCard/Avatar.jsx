import React, { useCallback, useState } from 'react';
import DEFAULT_PIC from '../../../assets/img/defaultProfile.png';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';

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

  const toggleShow = () => setShowModal(!showModal);

  const onDrop = useCallback(async (aceptedFile) => {
    const file = aceptedFile[0];

    try {
      console.log(file);
    } catch (error) {
      console.error(error);
    }
  });

  /**
   * Handle options for profile modal
   * @param {'avatar' | 'settings'} type what type of modal do you want to show
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
          <SettingForm setShowModal={setShowModal} />
        );
        setShowModal(true);
        break;

      default:
        break;
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/png, image/jpeg, image/jpg',
    noKeyboard: true,
    multiple: true,
    onDrop,
  });

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
            onClick={() => handleModal('avatar')}
            className="avatar-profile__image"
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
        className="avatar-setting"
        onClick={() => handleModal('settings')}
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

      {/* <MDBIcon fas icon="pen" {...getRootProps()} />
      <input {...getInputProps()} /> */}
    </MDBCard>
  );
}

export default Avatar;
