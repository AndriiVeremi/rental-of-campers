import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, deleteFavorite } from 'store/favoritesSlice';
import { selectFavorites } from 'store/selectors';

import { sliceText } from 'utils/sliceText';
import { corectPrice } from 'utils/corectPrice';
import { ifDetails } from 'utils/ifDetails';
import { isFavorit } from 'utils/isFavorit';

import { ReactComponent as Adult } from '../../images/adult.svg';
import { ReactComponent as Transmision } from '../../images/transmision.svg';
import { ReactComponent as Benz } from '../../images/benz.svg';
import { ReactComponent as Kitchen } from '../../images/kitchen.svg';
import { ReactComponent as Beds } from '../../images/beds.svg';
import { ReactComponent as Vind } from '../../images/vind.svg';
import { ReactComponent as Map } from '../../images/map.svg';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Haert } from '../../images/heart.svg';

import {
  ListItem,
  ImageItem,
  NameWrapper,
  PriceContein,
  RatingWrapper,
  Rating,
  ImageItemWrapper,
  Description,
  DescriptionText,
  InfoWrapper,
  InfoList,
  InfoItem,
  Button,
} from './CatalogCard.module';

const CatalogCard = ({ campers, toggleModal }) => {

  const { _id, name, gallery, price, rating, reviews, location, description, adults, transmission, engine, details } =
    campers;

  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const goFavorite = () => {
    if (isFavorit(_id, favorites)) {
      dispatch(deleteFavorite(campers));
    } else {
      dispatch(addFavorite(campers));
    }
  };

  return (
    <ListItem key={_id}>
      <ImageItemWrapper>
        <ImageItem src={gallery[0]} alt={name} />
      </ImageItemWrapper>
      <div>
        <NameWrapper>
          <p>{name}</p>
          <PriceContein>
            <p>&euro;{corectPrice(price)}</p>
            <Haert
              style={isFavorit(_id, favorites) ? { fill: '#E44848', stroke: '#E44848' } : { fill: '#fff', stroke: '#101828' }}
              onClick={goFavorite}
              width={24}
              alt="Haert"
            />
          </PriceContein>
        </NameWrapper>

        <RatingWrapper>
          <Rating>
            <Star style={{ marginRight: '8px' }} />
            {rating} ({reviews.length} Reviews)
          </Rating>
          <span>
            <Map style={{ marginRight: '8px' }} />
            {location}
          </span>
        </RatingWrapper>

        <Description>
          <DescriptionText>{sliceText(description)}...</DescriptionText>
        </Description>

        <InfoWrapper>
          <InfoList>
            {ifDetails(campers.ImgAdults) && (
              <InfoItem>
                <Adult style={{ marginRight: '8px' }} />
                {adults} adults
              </InfoItem>
            )}

            {ifDetails(campers.ImgTransmision) && (
              <InfoItem>
                <Transmision style={{ marginRight: '8px' }} />
                {transmission}
              </InfoItem>
            )}

            {ifDetails(campers.ImgPetrol) && (
              <InfoItem>
                <Benz style={{ marginRight: '8px' }} />
                {engine}
              </InfoItem>
            )}

            {ifDetails(campers.ImgKitchen) && (
              <InfoItem>
                <Kitchen style={{ marginRight: '8px' }} />
                {details.kitchen && 'Kitchen'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgBeds) && (
              <InfoItem>
                <Beds style={{ marginRight: '8px' }} />
                {details.beds} beds
              </InfoItem>
            )}

            {ifDetails(campers.ImgClimat) && (
              <InfoItem>
                <Vind style={{ marginRight: '8px' }} />
                {details.airConditioner && 'AC'}
              </InfoItem>
            )}
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
