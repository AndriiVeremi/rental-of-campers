import { WrapperNav, Logo, ListNav, ListItem, ItemsLink  } from './Header.module';

const Header = () => {
  return (
    <WrapperNav>
      <Logo>Rental Of Campers</Logo>
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
