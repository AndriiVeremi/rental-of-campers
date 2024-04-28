import { useState } from 'react';
import MainButton from 'components/MainButton/MainButton';
import { Modal } from 'components/Modal/Modal';
import BookNow from 'components/BookNow/BookNow';
import { HeroWrapper, ModalHeroWrapper, HeroInfo, HeroTitle, BtnCloses } from './Hero.styled';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <HeroWrapper>
        <HeroInfo>
          <HeroTitle>Captivating adventures await you!</HeroTitle>
          <MainButton type="button" size="small" onClick={() => toggleModal()}>
            Book now
          </MainButton>
        </HeroInfo>
      </HeroWrapper>

      {showModal && (
        <Modal onClose={() => toggleModal()}>
          <ModalHeroWrapper>
            <BtnCloses onClick={() => toggleModal()} />
            <BookNow />
          </ModalHeroWrapper>
        </Modal>
      )}
    </>
  );
};

export default Hero;
