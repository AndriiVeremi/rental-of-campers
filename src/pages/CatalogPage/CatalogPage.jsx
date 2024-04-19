import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import CatalogList from 'components/CatalogList/CatalogList';
import { fetchCampers, loadMoreCampers } from 'store/operations';
import { Modal } from 'components/Modal/Modal';
import { selectCampers, selectIsLoading, selectError, selectAll } from 'store/selectors';

import { CatalogPageWrapper, ListWrapper, Button } from './CatalogPage.module';

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const all = useSelector(selectAll);

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [page, setPage] = useState(1);

  console.log('all', all);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchCampers());
    } else {
      dispatch(loadMoreCampers(page));
    }
  }, [dispatch, page]);

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
    setPage(prev => prev + 1);
  };

  return (
    <>
      <CatalogPageWrapper>
        <FiltersBar />
        <ListWrapper>
          <CatalogList campers={campers} toggleModal={toggleModal} />
          {campers.length > 0 && !isLoading && <Button onClick={onLoadMore}>Load more</Button>}
        </ListWrapper>
      </CatalogPageWrapper>
      {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
    </>
  );
};

export default CatalogPage;
