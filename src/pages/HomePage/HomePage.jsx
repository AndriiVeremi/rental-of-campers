import HomeImg from '../../images/pictures/home.jpg';

import { InfoWrapper, InfoTitle, TextWrapper, DescriptionTitle, InfoImg, Text } from './HomePage.module';

const HomePage = () => {
  return (
    <InfoWrapper>
      <InfoImg src={HomeImg} alt="HomeImg" />
      <InfoTitle>Hello!</InfoTitle>
      <TextWrapper>
        <DescriptionTitle>Captivating adventures await you with our camper rental!</DescriptionTitle>
        <Text>
          Welcome to our website where dreams of travel become reality. Pack your bags, break the stereotypes, and
          embark on an unforgettable journey in our comfortable and stylish camper vans.
        </Text>
        <Text>
          With us, you can discover new horizons, setting off on travels without any limits. Our campers are not just
          means of transportation but also convenient and cozy places for your relaxation. Feel the freedom of the road
          as you explore picturesque landscapes and remote corners of nature.
        </Text>
        <Text>
          Convenient booking, reliable service, and the most favorable conditions await you. Don't wait, allow yourself
          an adventure in style with our camper rental.
        </Text>
      </TextWrapper>
    </InfoWrapper>
  );
};

export default HomePage;
