import CamperFeatures from 'components/CamperFeatures/CamperFeatures';
import CamperReviewsList from 'components/CamperReviewsList/CamperReviewsList';
import BookNow from 'components/BookNow/BookNow';
import { corectPrice } from 'utils/corectPrice';
import CloseImg from '../../images/close.svg';
import MapImg from '../../images/map.svg';

import {
  ModalWrapper,
  NameWrapper,
  RatingWrapper,
  Rating,
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
  MorInfoWrapper
} from './CamperInfo.styled';
import { useState } from 'react';

const CamperInfo = ({ data, onClose }) => {

  const [isFeatures, setIsFeatures] = useState(true);

  const { name, price, rating, location, description, gallery, reviews } = data;



 

  return (
    <ModalWrapper>
      <NameWrapper>
        <p>{name}</p>
        <img src={CloseImg} alt="Close" onClick={() => onClose()} />
      </NameWrapper>

      <RatingWrapper>
        <Rating>
          {rating} ({reviews.length} Reviews)
        </Rating>
        <span>
          <img src={MapImg} alt="Maps" />
          {location}
        </span>
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
          <InfoListItem>
            <InfoItemBtn onClick={() => setIsFeatures(true)}>Features</InfoItemBtn>
          </InfoListItem>
          <InfoListItem>
            <InfoItemBtn onClick={() => setIsFeatures(false)}>Reviews</InfoItemBtn>
          </InfoListItem>
        </InfoList>
      </InfoWrapper>

      <BarLine></BarLine>

      <MorInfoWrapper>
        {isFeatures ? <CamperFeatures/> : <CamperReviewsList reviews={reviews} />}
        <BookNow />
      </MorInfoWrapper>



     

          


    </ModalWrapper>

    
  );
};

export default CamperInfo;
