import FiltersBar from 'components/FiltersBar/FiltersBar';
import Catalog from 'components/Catalog/Catalog';
import { CatalogPageWrapper } from './CatalogPage.module';

const CatalogPage = () => {
  return (
    <CatalogPageWrapper>
      <FiltersBar />
      <Catalog />
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
