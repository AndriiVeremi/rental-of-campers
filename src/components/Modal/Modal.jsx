import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalWrapper } from './Modal.styled';
import CamperInfo from 'components/CamperInfo/CamperInfo';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ campers, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalWrapper>
          <CamperInfo data={campers} onClose={onClose} />
        </ModalWrapper>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
