/* Components */
import { ProfileModal } from './Profile.Modal';
import { AvatarOptions, Settings } from './chunks';
import { MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';

/* Hooks */
import { toast } from 'react-toastify';
import { useAppSelector, useModal } from '@/hooks';

/* Statics */
import DEFAULT_PROFILE from '/img/default-profile.png';

import './Profile.scss';

export const Profile = () => {
  const { user } = useAppSelector((state) => state.user);

  const { modalTitle, modalContent, showModal, openModal, closeModal } =
    useModal();

  const changeAvatar = () => {
    openModal(
      'Change profile picture',
      <AvatarOptions closeModal={closeModal} />
    );
  };

  const changeInfo = () => {
    openModal(
      'Change profile info',
      <Settings user={{ name: user.name, email: user.email }} />
    );
  };

  return (
    <main className="container mt-5 d-flex flex-rows justify-content-start">
      <section>
        <MDBCard className="profile-card">
          <MDBCardBody>
            <section className="profile-user">
              <img
                src={user.img || DEFAULT_PROFILE}
                alt={user.name}
                onClick={() => {
                  return user.google
                    ? toast.info(
                        'Google users cannot change their profile picture'
                      )
                    : changeAvatar();
                }}
                className="profile-user__image cursor-pointer"
                onError={(e) => {
                  if (e.currentTarget.src !== DEFAULT_PROFILE) {
                    e.currentTarget.src = DEFAULT_PROFILE;
                  }
                }}
              />
            </section>
            <span className="profile-name mt-3">{user.name}</span>
          </MDBCardBody>

          <section
            className={`profile-settings ${user.google && 'profile-google'}`}
            onClick={() => {
              return user.google
                ? toast.info('Google users cannot change their information.')
                : changeInfo();
            }}
          >
            <MDBIcon fas icon="pen" />
          </section>

          <ProfileModal
            title={modalTitle ?? '--'}
            showModal={showModal}
            closeModal={closeModal}
          >
            {modalContent ?? <span>No content</span>}
          </ProfileModal>
        </MDBCard>
      </section>
      <section className="w-100">
        <h4 className="text-center">Order list</h4>
      </section>
    </main>
  );
};
