import CatalogCard from 'components/CatalogCard/CatalogCard';
import { List } from './CatalogList.module';



const CatalogList = ({ campers, onOpen }) => {
  console.log('campers2', campers);
  return <List>{campers && campers.map(item => <CatalogCard key={item._id} campers={item} onOpen={onOpen} />)}</List>;
};

export default CatalogList;
