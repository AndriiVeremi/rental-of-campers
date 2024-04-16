import CamperReviewsItem from "components/CamperReviewsItem/CamperReviewsItem";

const CamperReviewsList = ({ reviews }) => {
  console.log('reviews', reviews);

  return (
    <div>
      <ul>
      {reviews && reviews.map((item, index) => <CamperReviewsItem key={index} review={item}></CamperReviewsItem>)}
      </ul>
    </div>
  );
};

export default CamperReviewsList;
