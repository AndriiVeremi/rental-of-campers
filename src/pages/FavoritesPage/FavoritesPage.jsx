import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';

import FiltersBar from 'components/FiltersBar/FiltersBar';
import CatalogList from 'components/CatalogList/CatalogList';
import { Modal } from 'components/Modal/Modal';

import { CatalogPageWrapper, ListWrapper } from './FavoritesPage.module';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const toggleModal = data => {
    setShowModal(!showModal);
    setSelectedCamper(data);
  };

  return (
    <>
      <CatalogPageWrapper>
        <FiltersBar />
        <ListWrapper>
          <CatalogList campers={favorites} toggleModal={toggleModal} />
        </ListWrapper>
      </CatalogPageWrapper>
      {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
    </>
  );
};

export default FavoritesPage;
