import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import Catalog from 'components/CatalogList/CatalogList';
import { fetchCampers } from 'store/operations';
import { selectCampers, selectIsLoading, selectError } from 'store/selectors';
import { CatalogPageWrapper } from './CatalogPage.module';

const CatalogPage = () => {
const campers = useSelector(selectCampers)
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
const dispatch = useDispatch();

console.log('campers', campers)

useEffect(() => {
  dispatch(fetchCampers());
}, [dispatch]);

if (isLoading && !error) {
  return <b>Request in progress...</b>;
}

if (error) {
  return <b>{error}</b>;
}

  return (
    <CatalogPageWrapper>
      <FiltersBar />
      <Catalog campers={campers} />
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
