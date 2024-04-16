import starReiting from "utils/starReiting";


const CamperReviewsItem = ({review}) => {
console.log('review', review)

    return (
      <li>
        <div>
          <div>
            {/* <img src={review.} alt="" /> */}
          </div>
          <div>
            <h2>{review.reviewer_name}</h2>
            <span>{starReiting(review.reviewer_rating)}</span>
            <span id="star"></span>
            <span>{review.reviewer_rating}</span>
          </div>
        </div>
        <div>
          <p>{review.comment}</p>
        </div>
      </li>
    );

}

export default CamperReviewsItem;