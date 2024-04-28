import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from 'store/favoritesSlice';
import { selectFavorites } from 'store/selectors';
import MainButton from 'components/MainButton/MainButton';
import Slider from 'components/Slider/Slider';
import CamperInfo from 'components/CamperInfo/CamperInfo';
import { Modal } from 'components/Modal/Modal';

import { sliceText } from 'utils/sliceText';
import { corectPrice } from 'utils/corectPrice';
import { renderIfDetails } from 'utils/ifDetails';
import { isFavorit } from 'utils/isFavorit';

import { ReactComponent as Adult } from '../../images/icons/adult.svg';
import { ReactComponent as Transmision } from '../../images/icons/transmision.svg';
import { ReactComponent as Benz } from '../../images/icons/benz.svg';
import { ReactComponent as Kitchen } from '../../images/icons/kitchen.svg';
import { ReactComponent as Beds } from '../../images/icons/beds.svg';
import { ReactComponent as Vind } from '../../images/icons/vind.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { ReactComponent as Children } from '../../images/icons/children.svg';
import { ReactComponent as TV } from '../../images/icons/tv.svg';

import {
  ListItem,
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
  Maps,
} from './CatalogCard.module';
import { useState } from 'react';

const CatalogCard = ({ campers }) => {
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


  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ListItem key={_id}>
      <ImageItemWrapper>
        <Slider images={gallery} />
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
            <Maps style={{ marginRight: '8px' }} />
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
            {renderIfDetails(
              details.airConditioner,
              <Vind style={{ marginRight: '8px' }} />,
              details.airConditioner && 'ac'
            )}
            {renderIfDetails(children, <Children style={{ marginRight: '8px' }} />, `${children} children`)}

            {renderIfDetails(details.TV, <TV style={{ marginRight: '8px' }} />, details.TV && 'tv')}
          </InfoList>
        </InfoWrapper>

        <MainButton type="button" size="medium" onClick={() => toggleModal()}>
          Show more
        </MainButton>

       

        {showModal && (
        <Modal onClose={() => toggleModal()}>
          <CamperInfo data={campers} onClose={() => toggleModal()} />
        </Modal>
      )}

      </div>
    </ListItem>
  );
};

export default CatalogCard;
