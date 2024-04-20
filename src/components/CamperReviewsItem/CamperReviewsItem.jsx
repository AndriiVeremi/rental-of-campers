import ReactStars from 'react-rating-stars-component';
import { ReviewInfo, ReviewAvatar, ReviewAvatarName, ReviewName, ReviewComment } from './CamperReviewsItem.module';

const CamperReviewsItem = ({ review }) => {
  const data = {
    size: 20,
    value: review.reviewer_rating,
    edit: false,
  };

  return (
    <li>
      <ReviewInfo>
        <ReviewAvatar>
          <ReviewAvatarName>{review.reviewer_name[0]}</ReviewAvatarName>
        </ReviewAvatar>
        <div>
          <ReviewName>{review.reviewer_name}</ReviewName>
          <ReactStars {...data} />
        </div>
      </ReviewInfo>
      <div>
        <ReviewComment>{review.comment}</ReviewComment>
      </div>
    </li>
  );
};

export default CamperReviewsItem;
