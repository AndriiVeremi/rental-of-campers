import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import Catalog from 'components/CatalogList/CatalogList';
import { fetchCampers } from 'store/operations';
import { selectCampers, selectPage, selectIsLoading, selectError } from 'store/selectors';

import { CatalogPageWrapper } from './CatalogPage.module';

const CatalogPage = ( isShowModal, onClose) => {
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  console.log('campers1', campers);
  console.log('page', page);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading && !error) {
    return <b>Request in progress...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  const onLoadMore = () => {
    // dispatch(page + 1)
  };

  return (
    <>
      {/* {campers.length > 0 && !isLoading && <button onClick={onLoadMore}>Load more</button>} */}
      {/* {isShowModal && <Modal  onClose={onClose} />} */}

      <CatalogPageWrapper>
        <FiltersBar />
        <Catalog campers={campers} />
      </CatalogPageWrapper>
    </>
  );
};

export default CatalogPage;
