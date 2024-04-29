import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
import CatalogList from 'components/CatalogList/CatalogList';
import { Modal } from 'components/Modal/Modal';
import NoInform from 'components/NoInform/NoInform';
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
        <ListWrapper>
          {favorites.length !== 0 ? (
            <CatalogList campers={favorites} toggleModal={toggleModal} />
          ) : (
            <NoInform text="Favorite is empty :(" />
          )}
        </ListWrapper>
      </CatalogPageWrapper>
      {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
    </>
  );
};

export default FavoritesPage;
