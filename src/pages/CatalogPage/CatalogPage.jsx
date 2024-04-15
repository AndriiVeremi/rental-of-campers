import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import CatalogList from 'components/CatalogList/CatalogList';
import { fetchCampers } from 'store/operations';
import { Modal } from 'components/Modal/Modal';
import { selectCampers, selectPage, selectIsLoading, selectError, selectAll } from 'store/selectors';

import { CatalogPageWrapper, ListWrapper, Button } from './CatalogPage.module';

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const all = useSelector(selectAll);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  console.log('all', all);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading && !error) {
    return <b>Request in progress...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  const toggleModal = data => {
    setShowModal(!showModal);
    setSelectedCamper(data);
  };

  const onLoadMore = () => {
    dispatch(fetchCampers(page + 1));
  };

  return (
   <>
    <CatalogPageWrapper>
      <FiltersBar />
      <ListWrapper>
        <CatalogList campers={campers} toggleModal={toggleModal}/>
        {campers.length > 0 && !isLoading && <Button onClick={onLoadMore}>Load more</Button>}
      </ListWrapper>
    </CatalogPageWrapper>
     {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
   </>
  );
};

export default CatalogPage;
