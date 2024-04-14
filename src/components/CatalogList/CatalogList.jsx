import CatalogCard from 'components/CatalogCard/CatalogCard';
import { List } from './CatalogList.module';



const CatalogList = ({ campers }) => {
   return <List>{campers && campers.map(item => <CatalogCard key={item._id} campers={item} />)}</List>;
};

export default CatalogList;
