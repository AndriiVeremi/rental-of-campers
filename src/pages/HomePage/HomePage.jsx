import HomeImg from '../../images/pictures/home.png';
import Hero from 'components/Home/Hero/Hero';
import HeroContent from 'components/Home/HeroContent/HeroContent';

import {
  InfoWrapper,
  InfoTitle,
  DescriptionTitle,
  PlanningList,
  PlanningTitle,
  PlanningItem,
  HeroWrapper,
  ContentDescription,
  SubTitlePlanning,
  InfoImg,
} from './HomePage.module';

const HomePage = () => {
  return (
    <>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>

      <InfoWrapper>
        <InfoTitle>Welcome to Rental Of Campers </InfoTitle>
        <DescriptionTitle>
          Embark on your next adventure with our fleet of top-quality campers. Whether you're planning a weekend getaway
          or a cross-country road trip, we have the perfect camper to suit your needs.
        </DescriptionTitle>

        <HeroContent />
      </InfoWrapper>

      <ContentDescription>
        <div>
          <PlanningTitle>Why choose us?</PlanningTitle>
          <PlanningList>
            <PlanningItem>
              <strong>Diverse Fleet:</strong> From cozy campervans to spacious RVs, we offer a wide range of options to
              accommodate solo travelers, couples, families, and groups of all sizes.
            </PlanningItem>
            <PlanningItem>
              <strong>Quality Assurance:</strong> Our campers undergo regular maintenance checks to ensure they are in
              excellent condition, providing you with a safe and comfortable travel experience.
            </PlanningItem>
            <PlanningItem>
              <strong>Easy Booking:</strong> With our user-friendly website and efficient booking system, securing your
              camper rental is quick and hassle-free.
            </PlanningItem>
            <PlanningItem>
              <strong>Expert Support:</strong> Have questions or need assistance? Our friendly and knowledgeable team is
              here to help. Whether you need travel tips or technical support during your journey, we've got you
              covered.
            </PlanningItem>
          </PlanningList>
        </div>
        <SubTitlePlanning>
          <InfoImg src={HomeImg} alt="HomeImg" />
          Start planning your next adventure today! Browse our selection of campers and{' '}
          <div>book your rental online</div>
          Your unforgettable journey awaits with Camper Rentals.
        </SubTitlePlanning>
      </ContentDescription>
    </>
  );
};

export default HomePage;
