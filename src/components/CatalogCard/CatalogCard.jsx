import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';

import {
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
} from './CatalogCard.module';
import { getCampers } from 'api/campersAPI';

const CatalogCard = ({ campers, onOpen }) => {
  return (
    <ListItem key={campers._id}>
      <ImageItem src={campers.gallery[0]} alt={campers.name} width="290" height="310" />
      <div>
        <NameWrapper>
          <p>{campers.name}</p>
          <p>&euro;{campers.price}</p>
        </NameWrapper>
        <RatingWrapper>
          <Rating>
            {getCampers.rating} ({campers.reviews.length} Reviews)
          </Rating>
          <span>{campers.location}</span>
        </RatingWrapper>

        <Description>
          <DescriptionText>{campers.description.trim().slice(0, 63)}...</DescriptionText>
        </Description>

        <InfoWrapper>
          <InfoList>
            <InfoItem>
              <InfoImg src={ImgAdults} alt="Adults" />
              {campers.adults} adults
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgTransmision} alt="Transmision" />
              {campers.transmission}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgPetrol} alt="Petrol" />
              {campers.engine}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgKitchen} alt="Kitchen" />
              {campers.details.kitchen && 'Kitchen'}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgBeds} alt="beds" />
              {campers.details.beds} beds
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgClimat} alt="Conditioner" />
              {campers.details.airConditioner && 'AC'}
            </InfoItem>
          </InfoList>
        </InfoWrapper>

        <Button type="button">Show more</Button>
      </div>
    </ListItem>
  );
};

export default CatalogCard;
