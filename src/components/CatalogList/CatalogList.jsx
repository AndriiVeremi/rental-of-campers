import CatalogCard from 'components/CatalogCard/CatalogCard';
import { List } from './CatalogList.module';



const CatalogList = ({ campers, toggleModal }) => {
   return <List>{campers && campers.map(item => <CatalogCard key={item._id} campers={item} toggleModal={toggleModal} />)}</List>;
};

export default CatalogList;
