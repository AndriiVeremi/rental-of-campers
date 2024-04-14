import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer} from './Modal.styled';
import CamperInfo from 'components/CamperInfo/CamperInfo';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ campers, onClose }) => {

console.log('campers', campers)

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
        <CamperInfo data={campers} onClose={onClose}/>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
