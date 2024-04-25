import { useState } from 'react';
import CamperFeatures from 'components/CamperFeatures/CamperFeatures';
import CamperReviewsList from 'components/CamperReviewsList/CamperReviewsList';
import BookNow from 'components/BookNow/BookNow';
import { corectPrice } from 'utils/corectPrice';

import { ReactComponent as Star } from '../../images/star.svg';

import {
  ModalWrapper,
  NameWrapper,
  RatingWrapper,
  Rating,
  Location,
  PriceWrapper,
  Price,
  GalleryListWrapper,
  GalleryList,
  GalleryItem,
  GalleryImgWrapper,
  GalleryImg,
  DescriptionWrapper,
  Description,
  InfoWrapper,
  InfoList,
  InfoListItem,
  InfoItemBtn,
  BarLine,
  MorInfoWrapper,
  Maps,
  BtnClose,
} from './CamperInfo.styled';

const CamperInfo = ({ data, onClose }) => {
  const [isFeatures, setIsFeatures] = useState(true);

  const { name, price, rating, location, description, gallery, reviews } = data;

  return (
    <ModalWrapper>
      <NameWrapper>
        <p>{name}</p>
        <BtnClose onClick={() => onClose()} />
      </NameWrapper>

      <RatingWrapper>
        <Rating>
          <Star />
          {rating} ({reviews.length} Reviews)
        </Rating>
        <Location>
          <Maps />
          {location}
        </Location>
      </RatingWrapper>

      <PriceWrapper>
        <Price>&euro;{corectPrice(price)}</Price>
      </PriceWrapper>

      <GalleryListWrapper>
        <GalleryList>
          {gallery &&
            gallery.map((item, index) => (
              <GalleryItem key={index}>
                <GalleryImgWrapper>
                  <GalleryImg src={item} alt={item} />
                </GalleryImgWrapper>
              </GalleryItem>
            ))}
        </GalleryList>
      </GalleryListWrapper>

      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>

      <InfoWrapper>
        <InfoList>
          <InfoListItem style={isFeatures ? { borderBottom: '5px solid #E44848' } : { borderBottom: 'none' }}>
            <InfoItemBtn onClick={() => setIsFeatures(true)}>Features</InfoItemBtn>
          </InfoListItem>
          <InfoListItem style={!isFeatures ? { borderBottom: '5px solid #E44848' } : { borderBottom: 'none' }}>
            <InfoItemBtn onClick={() => setIsFeatures(false)}>Reviews</InfoItemBtn>
          </InfoListItem>
        </InfoList>
      </InfoWrapper>

      <BarLine></BarLine>

      <MorInfoWrapper>
        {isFeatures ? <CamperFeatures data={data} /> : <CamperReviewsList reviews={reviews} />}
        <BookNow />
      </MorInfoWrapper>
    </ModalWrapper>
  );
};

export default CamperInfo;
