// import HomeImg from '../../images/pictures/home.jpg';
import Hero from 'components/Home/Hero/Hero';
import HeroContent from 'components/Home/HeroContent/HeroContent';

import { InfoWrapper, InfoTitle, DescriptionTitle, HeroWrapper, ContentDescription, TextTitle } from './HomePage.module';

const HomePage = () => {
  return (
    <>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>

      <InfoWrapper>
        <InfoTitle>Welcome to Camper Rentals!</InfoTitle>
        <DescriptionTitle>
          Embark on your next adventure with our fleet of top-quality campers. Whether you're planning a weekend getaway
          or a cross-country road trip, we have the perfect camper to suit your needs.
        </DescriptionTitle>

        <HeroContent />

        <ContentDescription>
          <TextTitle>
            Embark on your next adventure with our fleet of top-quality campers. Whether you're planning a weekend
            getaway or a cross-country road trip, we have the perfect camper to suit your needs.
          </TextTitle>
          <h2>Why choose us?</h2>
          <ul>
            <li>
              <strong>Diverse Fleet:</strong> From cozy campervans to spacious RVs, we offer a wide range of options to
              accommodate solo travelers, couples, families, and groups of all sizes.
            </li>
            <li>
              <strong>Quality Assurance:</strong> Our campers undergo regular maintenance checks to ensure they are in
              excellent condition, providing you with a safe and comfortable travel experience.
            </li>
            <li>
              <strong>Easy Booking:</strong> With our user-friendly website and efficient booking system, securing your
              camper rental is quick and hassle-free. Simply choose your dates, select your preferred camper, and you're
              ready to hit the road!
            </li>
            <li>
              <strong>Expert Support:</strong> Have questions or need assistance? Our friendly and knowledgeable team is
              here to help. Whether you need travel tips or technical support during your journey, we've got you
              covered.
            </li>
          </ul>
          <div>
            Start planning your next adventure today! Browse our selection of campers and{' '}
            <div>book your rental online</div>
            Your unforgettable journey awaits with Camper Rentals.
          </div>
        </ContentDescription>

        {/* <InfoImg src={HomeImg} alt="HomeImg" /> */}
      </InfoWrapper>
    </>
  );
};

export default HomePage;
