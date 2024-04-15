import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';

import { InfoWrapper, InfoList, InfoItem, InfoImg } from './CamperFeatures.module';



const CamperFeatures = () => {
return (
    
        <InfoWrapper>
          <InfoList>
            <InfoItem>
              <InfoImg src={ImgAdults} alt="Adults" />
              {/* {campers.adults} adults */}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgTransmision} alt="Transmision" />
              {/* {campers.transmission} */}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgPetrol} alt="Petrol" />
              {/* {campers.engine} */}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgKitchen} alt="Kitchen" />
              {/* {campers.details.kitchen && 'Kitchen'} */}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgBeds} alt="beds" />
              {/* {campers.details.beds} beds */}
            </InfoItem>
            <InfoItem>
              <InfoImg src={ImgClimat} alt="Conditioner" />
              {/* {campers.details.airConditioner && 'AC'} */}
            </InfoItem>
          </InfoList>
        </InfoWrapper>
    
)
}

export default CamperFeatures;