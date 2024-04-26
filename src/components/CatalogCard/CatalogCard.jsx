import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from 'store/favoritesSlice';
import { selectFavorites } from 'store/selectors';
import MainButton from 'components/MainButton/MainButton';

import { sliceText } from 'utils/sliceText';
import { corectPrice } from 'utils/corectPrice';
import { renderIfDetails } from 'utils/ifDetails';
import { isFavorit } from 'utils/isFavorit';

import { ReactComponent as Adult } from '../../images/adult.svg';
import { ReactComponent as Transmision } from '../../images/transmision.svg';
import { ReactComponent as Benz } from '../../images/benz.svg';
import { ReactComponent as Kitchen } from '../../images/kitchen.svg';
import { ReactComponent as Beds } from '../../images/beds.svg';
import { ReactComponent as Vind } from '../../images/vind.svg';
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
  Haerts,
  Maps
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
            <Maps style={{ marginRight: '8px'}} />
            {location}
          </span>
        </RatingWrapper>

        <Description>
          <DescriptionText>{sliceText(description)}...</DescriptionText>
        </Description>

        <InfoWrapper>
          <InfoList>
            {renderIfDetails(adults, <Adult style={{ marginRight: '8px' }} />, `${adults} adults`)}
            {renderIfDetails(transmission, <Transmision style={{ marginRight: '8px' }} />, transmission)}
            {renderIfDetails(engine, <Benz style={{ marginRight: '8px' }} />, engine)}
            {renderIfDetails(details.kitchen, <Kitchen style={{ marginRight: '8px' }} />, details.kitchen && 'kitchen')}
            {renderIfDetails(details.beds, <Beds style={{ marginRight: '8px' }} />, `${details.beds} beds`)}
            {renderIfDetails(details.airConditioner, <Vind style={{ marginRight: '8px' }} />, details.airConditioner && 'ac')}
            {renderIfDetails(details.bathroom, <Bathroom style={{ marginRight: '8px' }} />, details.bathroom && 'bathroom')}
            {renderIfDetails(children, <Children style={{ marginRight: '8px' }} />, `${children} children`)}
            {renderIfDetails(details.gas, <Gas style={{ marginRight: '8px' }} />, `gas ${details.gas}`)}
            {renderIfDetails(details.microwave, <Microwave style={{ marginRight: '8px' }} />, details.microwave && 'microwave')}
            {renderIfDetails(details.toilet, <Toilet style={{ marginRight: '8px' }} />, details.toilet && 'toilet')}
            {renderIfDetails(details.water, <Water style={{ marginRight: '8px' }} />, `water ${details.water}`)}
            {renderIfDetails(details.CD, <Cd style={{ marginRight: '8px' }} />, details.CD && 'cd')}
            {renderIfDetails(details.freezer, <Hob style={{ marginRight: '8px' }} />, `${details.freezer} hob`)}
            {renderIfDetails(details.TV, <TV style={{ marginRight: '8px' }} />, details.TV && 'tv')}
            {renderIfDetails(details.freezer, <Freezer style={{ marginRight: '8px' }} />, details.freezer && 'treezer')}
            {renderIfDetails(details.radio, <Radio style={{ marginRight: '8px' }} />, details.radio && 'radio')}
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
