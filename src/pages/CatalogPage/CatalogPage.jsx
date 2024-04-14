import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import CatalogList from 'components/CatalogList/CatalogList';
import { fetchCampers } from 'store/operations';
import { selectCampers, selectPage, selectIsLoading, selectError, selectAll } from 'store/selectors';

import { CatalogPageWrapper, ListWrapper, Button } from './CatalogPage.module';

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const all = useSelector(selectAll);

  const dispatch = useDispatch();

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


  const onLoadMore = () => {
    dispatch(fetchCampers(page + 1));
  };

  return (
    <CatalogPageWrapper>
      <FiltersBar />
      <ListWrapper>
        <CatalogList campers={campers} />
        {campers.length > 0 && !isLoading && <Button onClick={onLoadMore}>Load more</Button>}
      </ListWrapper>
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
