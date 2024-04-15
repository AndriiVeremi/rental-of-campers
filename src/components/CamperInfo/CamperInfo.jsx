// import CamperFeatures from 'components/CamperFeatures/CamperFeatures';
import CamperReviews from 'components/CamperReviews/CamperReviews';
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
  InfoItemText,
  BarLine,
  MorInfoWrapper
} from './CamperInfo.styled';

const CamperInfo = ({ data, onClose }) => {
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
            gallery.map(item => (
              <GalleryItem key={item}>
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
            <InfoItemText>Features</InfoItemText>
          </InfoListItem>
          <InfoListItem>
            <InfoItemText>Reviews</InfoItemText>
          </InfoListItem>
        </InfoList>
      </InfoWrapper>

      <BarLine></BarLine>

      <MorInfoWrapper>
        {/* <CamperFeatures/> */}
        <CamperReviews />
        <BookNow />
      </MorInfoWrapper>


    </ModalWrapper>

    
  );
};

export default CamperInfo;
