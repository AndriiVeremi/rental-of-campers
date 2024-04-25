import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import CatalogList from 'components/CatalogList/CatalogList';
import Loaders from 'components/Loaders/Loaders';
import { fetchCampers, loadMoreCampers } from 'store/operations';
import { Modal } from 'components/Modal/Modal';
import NoInform from 'components/NoInform/NoInform';
import { selectCampers, selectRespLength, selectIsLoading, selectError, selectFilteredCampers } from 'store/selectors';
import { CatalogPageWrapper, ListWrapper, Errors } from './CatalogPage.module';
import { MoreButton } from 'components/MainButton/MainButton.styled';

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const filtredCampers = useSelector(selectFilteredCampers);
  const respLength = useSelector(selectRespLength);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchCampers());
    } else {
      dispatch(loadMoreCampers(page));
    }
  }, [dispatch, page]);

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
          {isLoading && <Loaders />}
          {error && <Errors>error:{`${error}`}</Errors>}
          {campers.length !== 0 ? (
            <CatalogList campers={filtredCampers.length === 0 ? campers : filtredCampers} toggleModal={toggleModal} />
          ) : (
            <NoInform text="not information" />
          )}
         
          {respLength > 1 && filtredCampers.length === 0 && (
            <MoreButton type="button" onClick={onLoadMore}>
              Load more
            </MoreButton>
          )}
        </ListWrapper>
      </CatalogPageWrapper>
      {showModal && <Modal onClose={toggleModal} campers={selectedCamper} />}
    </>
  );
};

export default CatalogPage;
