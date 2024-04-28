import Home1 from '../../../images/pictures/heroIn1.jpg';
import Home2 from '../../../images/pictures/heroIn2.jpg';
import Home3 from '../../../images/pictures/heroIn3.jpg';
import { HeroContentList, HeroContentItem, HeroContentText } from './HeroContent.styled';

const HeroContent = () => {
  return (
    <>
      <HeroContentList>
        <HeroContentItem>
          <img src={Home1} width='150px' alt="Home1" />
          <HeroContentText>
            With us, you can discover new horizons, setting off on travels without any limits. Our campers are not just
            means of transportation but also convenient and cozy places for your relaxation.
          </HeroContentText>
        
        </HeroContentItem>
        <HeroContentItem>
          <img src={Home2} width='150px' alt="Home2" />
          <HeroContentText>
            Welcome to our website where dreams of travel become reality. Pack your bags, break the stereotypes, and
            embark on an unforgettable journey in our comfortable and stylish camper vans.
          </HeroContentText>
        
        </HeroContentItem>
        <HeroContentItem>
          <img src={Home3} width='150px' alt="Home3" />
          <HeroContentText>
            Convenient booking, reliable service, and the most favorable conditions await you. Don't wait, allow
            yourself an adventure in style with our camper rental.
          </HeroContentText>
        </HeroContentItem>
      </HeroContentList>
    </>
  );
};

export default HeroContent;
