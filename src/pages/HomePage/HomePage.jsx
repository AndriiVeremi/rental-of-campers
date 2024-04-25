import { InfoWrapper, InfoTitle, TextWrapper, DescriptionTitle } from "./HomePage.module";

import { ReactComponent as Van } from '../../images/campVan.svg';

const HomePage = () => {

  return (
    <InfoWrapper>
      <Van style={{ width: '300px', height: '300px', fill: "#e44848" }} />
      <InfoTitle>Hello!</InfoTitle>
      <TextWrapper>
      <DescriptionTitle>Captivating adventures await you with our camper rental!</DescriptionTitle>
      <p>
        Welcome to our website where dreams of travel become reality. Pack your bags, break the stereotypes, and embark
        on an unforgettable journey in our comfortable and stylish camper vans.
      </p>
      <p>
        With us, you can discover new horizons, setting off on travels without any limits. Our campers are not just
        means of transportation but also convenient and cozy places for your relaxation. Feel the freedom of the road as
        you explore picturesque landscapes and remote corners of nature.
      </p>
      <p>
        Convenient booking, reliable service, and the most favorable conditions await you. Don't wait, allow yourself an
        adventure in style with our camper rental.
      </p>
      </TextWrapper>
    </InfoWrapper>
  );
};

export default HomePage;
