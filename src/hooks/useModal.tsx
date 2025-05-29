import { ReactElement, useState } from 'react';

type TModalContent = ReactElement | ReactElement[] | null;

interface IOutputProps {
  showModal: boolean;
  modalContent: TModalContent;
  modalTitle: string | null;
  openModal: (title: string, content: TModalContent) => void;
  closeModal: () => void;
}

export const useModal = (): IOutputProps => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<TModalContent>(null);

  const openModal = (title: string, content: TModalContent): void => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = (): void => setShowModal(false);

  return {
    showModal,
    modalContent,
    modalTitle,
    openModal,
    closeModal,
  };
};
