import {
  List,
  ListItem,
  ImageItem,
  NameWrapper,
  RatingWrapper,
  Rating,
  Description,
  DescriptionText,
  InfoWrapper,
  InfoList,
  InfoItem,
  InfoImg,
  Button,
} from './CatalogList.module';

import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';

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

            <InfoWrapper>
              <InfoList>
                <InfoItem>
                  <InfoImg src={ImgAdults} alt="Adults" />
                  {item.adults} adults
                </InfoItem>
                <InfoItem>
                  <InfoImg src={ImgTransmision} alt="Transmision" />
                  {item.transmission}
                </InfoItem>
                <InfoItem>
                  <InfoImg src={ImgPetrol} alt="Petrol" />
                  {item.engine}
                </InfoItem>
                <InfoItem>
                  <InfoImg src={ImgKitchen} alt="Kitchen" />
                  {item.details.kitchen && 'Kitchen'}
                </InfoItem>
                <InfoItem>
                  <InfoImg src={ImgBeds} alt="beds" />
                  {item.details.beds} beds
                </InfoItem>
                <InfoItem>
                  <InfoImg src={ImgClimat} alt="Conditioner" />
                  {item.details.airConditioner && 'AC'}
                </InfoItem>
              </InfoList>
            </InfoWrapper>

            <Button type="button">Show more</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default CatalogList;
