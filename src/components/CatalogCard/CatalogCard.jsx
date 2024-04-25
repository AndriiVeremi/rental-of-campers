import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, deleteFavorite } from 'store/favoritesSlice';
import { selectFavorites } from 'store/selectors';

import MainButton from 'components/MainButton/MainButton';

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

import { ReactComponent as Bathroom } from '../../images/bathroom.svg';
import { ReactComponent as Children } from '../../images/children.svg';
import { ReactComponent as Gas } from '../../images/gas.svg';
import { ReactComponent as Microwave } from '../../images/microwave.svg';
import { ReactComponent as Toilet } from '../../images/toilet.svg';
import { ReactComponent as Water } from '../../images/water.svg';
import { ReactComponent as Cd } from '../../images/cd.svg';
import { ReactComponent as Hob } from '../../images/hob.svg';
import { ReactComponent as TV } from '../../images/tv.svg';
import { ReactComponent as Freezer } from '../../images/freezer.svg';
import { ReactComponent as Radio } from '../../images/radio.svg';

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
  Haerts,
} from './CatalogCard.module';

const CatalogCard = ({ campers, toggleModal }) => {
  const {
    _id,
    name,
    gallery,
    price,
    rating,
    children,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = campers;

  console.log('details', campers);

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
            <Haerts
              style={
                isFavorit(_id, favorites) ? { fill: '#E44848', stroke: '#E44848' } : { fill: '#fff', stroke: '#101828' }
              }
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
                {adults} Adults
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
                {details.beds} Beds
              </InfoItem>
            )}

            {ifDetails(campers.ImgClimat) && (
              <InfoItem>
                <Vind style={{ marginRight: '8px' }} />
                {details.airConditioner && 'AC'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgBathroom) && (
              <InfoItem>
                <Bathroom style={{ marginRight: '8px' }} />
                {details.bathroom && 'Bathroom'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgChildren) && (
              <InfoItem>
                <Children style={{ marginRight: '8px' }} />
                {children} Children
              </InfoItem>
            )}

            {ifDetails(campers.ImgGas) && (
              <InfoItem>
                <Gas style={{ marginRight: '8px' }} />
                Gas {details.gas}
              </InfoItem>
            )}

            {ifDetails(campers.ImgMicrowave) && (
              <InfoItem>
                <Microwave style={{ marginRight: '8px' }} />
                {details.microwave && 'Microwave'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgToilet) && (
              <InfoItem>
                <Toilet style={{ marginRight: '8px' }} />
                {details.toilet && 'Toilet'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgWater) && (
              <InfoItem>
                <Water style={{ marginRight: '8px' }} />
                Water {details.water}
              </InfoItem>
            )}

            {ifDetails(campers.ImgWater) && (
              <InfoItem>
                <Cd style={{ marginRight: '8px' }} />
                {details.CD && 'CD'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgWater) && (
              <InfoItem>
                <Hob style={{ marginRight: '8px' }} />
                {details.hob} Hob
              </InfoItem>
            )}

            {ifDetails(campers.ImgWater) && (
              <InfoItem>
                <TV style={{ marginRight: '8px' }} />
                {details.TV && 'TV'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgWater) && (
              <InfoItem>
                <Freezer style={{ marginRight: '8px' }} />
                {details.freezer && 'Freezer'}
              </InfoItem>
            )}

            {ifDetails(campers.ImgWater) && (
              <InfoItem>
                <Radio style={{ marginRight: '8px' }} />
                {details.radio && 'Radio'}
              </InfoItem>
            )}
          </InfoList>
        </InfoWrapper>

        <MainButton type="button" size="medium" onClick={() => toggleModal(campers)}>
          Show more
        </MainButton>
      </div>
    </ListItem>
  );
};

export default CatalogCard;
