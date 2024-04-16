import CamperReviewsItem from "components/CamperReviewsItem/CamperReviewsItem";
import { ReviewList1 } from "./CamperReviewsList.module";

const CamperReviewsList = ({ reviews }) => {

  return (
    <div>
      <ReviewList1>
      {reviews && reviews.map((item, index) => <CamperReviewsItem key={index} review={item}></CamperReviewsItem>)}
      </ReviewList1>
    </div>
  );
};

export default CamperReviewsList;
