import { sliceText } from 'utils/sliceText';
import { corectPrice } from 'utils/corectPrice';

import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';
import MapImg from '../../images/map.svg';
import ImgStar from '../../images/star.svg';
import Haert from '../../images/heart.svg';

import {
  ListItem,
  ImageItem,
  NameWrapper,
  PriceContein,
  RatingWrapper,
  Rating,
  RatingImg,
  ImageItemWrapper,
  Description,
  DescriptionText,
  InfoWrapper,
  InfoList,
  InfoItem,
  InfoImg,
  Button,
} from './CatalogCard.module';

const CatalogCard = ({ campers, toggleModal }) => {
  return (
    <ListItem key={campers._id}>
      <ImageItemWrapper>
        <ImageItem src={campers.gallery[0]} alt={campers.name}  />
      </ImageItemWrapper>
      <div>
        <NameWrapper>
          <p>{campers.name}</p>
          <PriceContein>
            <p>&euro;{corectPrice(campers.price)}</p>
            <img src={Haert} width={24} alt="Haert" />
          </PriceContein>
        </NameWrapper>

        <RatingWrapper>
          <Rating>
            <RatingImg src={ImgStar} alt="Star" />
            {campers.rating} ({campers.reviews.length} Reviews)
          </Rating>
          <span>
            <RatingImg src={MapImg} alt="Maps" />
            {campers.location}
          </span>
        </RatingWrapper>

        <Description>
          <DescriptionText>{sliceText(campers.description)}...</DescriptionText>
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

        <Button type="button" onClick={() => toggleModal(campers)}>
          Show more
        </Button>
      </div>
    </ListItem>
  );
};

export default CatalogCard;
