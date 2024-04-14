import CloseImg from '../../images/close.svg';
import MapImg from '../../images/map.svg';

import {
  ModalWrapper,
  NameWrapper,
  RatingWrapper,
  Rating,
  PriceWrapper,
  Price,
  GalleryList,
  GalleryItem,
  GalleryImg,
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
            {location}</span>
      </RatingWrapper>

      <PriceWrapper>
        <Price>&euro;{price}</Price>
      </PriceWrapper>

      <div>
        <GalleryList>
          {gallery &&
            gallery.map(item => (
              <GalleryItem key={item}>
                <GalleryImg src={item} alt="" />
              </GalleryItem>
            ))}
        </GalleryList>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </ModalWrapper>
  );
};

export default CamperInfo;
