import { WrapperNav, Logo, ListNav, ListItem, ItemsLink, SpanName  } from './Header.module';
import { ReactComponent as Van } from '../../images/icons/campVan.svg';

const Header = () => {
  return (
    <WrapperNav>
      <Logo>
        <Van style={{ width: '40px', height: '40px', fill: "#e44848" }} /><span>Rental <SpanName>Of</SpanName> Campers</span></Logo>
      <ListNav>
        <ListItem>
          <ItemsLink to="/">Home</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/catalog">Catalog</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/favorites">Favorites</ItemsLink>
        </ListItem>
      </ListNav>
    </WrapperNav>
  );
};

export default Header;
