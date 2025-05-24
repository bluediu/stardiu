/* Components */
import {
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';

/* Interfaces */
import { IReactNodeProps } from '@/interfaces';

interface IProps extends IReactNodeProps {
  title: string;
  showModal: boolean;
  closeModal: () => void;
}

export const ProfileModal = (props: IProps) => {
  const { title, showModal, closeModal, children } = props;

  return (
    <MDBModal tabIndex="-1" open={showModal} onClose={() => closeModal()}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{title}</MDBModalTitle>
          </MDBModalHeader>
          <MDBModalBody className="no-spacing">{children}</MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};
