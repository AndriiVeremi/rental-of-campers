import {
  List,
  ListItem,
  ImageItem,
  NameWrapper,
  RatingWrapper,
  Rating,
  Description,
  DescriptionText,
  Button,
} from './CatalogList.module';

const CatalogList = ({ campers }) => {
  return (
    <List>
      {campers.map(item => (
        <ListItem key={item._id}>
          <ImageItem src={item.gallery[0]} alt={item.name} width="290" height="310" />
          <div>
            <NameWrapper>
              <p>{item.name}</p>
              <p>&euro;{item.price}</p>
            </NameWrapper>
            <RatingWrapper>
              <Rating>
                {item.rating} ({item.reviews.length} Reviews)
              </Rating>
              <span>{item.location}</span>
            </RatingWrapper>

            <Description>
              <DescriptionText>{item.description.trim().slice(0, 63)}...</DescriptionText>
            </Description>

            <Button type="button">Show more</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default CatalogList;
