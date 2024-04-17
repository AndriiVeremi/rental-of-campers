import { ifDetails } from 'utils/ifDetails';
import { corectDetails } from 'utils/corectDetails';
import { upperText } from 'utils/upperText';

import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';
import ImgAir from '../../images/air.svg';
import ImgCD from '../../images/cd.svg';
import ImgHob from '../../images/hob.svg';
import ImgRadio from '../../images/radio.svg';

import { InfoWrapper, InfoList, InfoItem, InfoImg, InfoTitle, BarLine, DetailsList, DetailsItem, DetailsItemName} from './CamperFeatures.module';

const CamperFeatures = ({ data }) => {
  console.log('data', data);

  const { adults, transmission, details, engine, form, length, width, height, tank, consumption } = data;

  return (
    <InfoWrapper>
      <InfoList>
        {ifDetails(adults) && (
          <InfoItem>
            <InfoImg src={ImgAdults} alt="Adults" />
            {adults} adults
          </InfoItem>
        )}

        {ifDetails(transmission) && (
          <InfoItem>
            <InfoImg src={ImgTransmision} alt="Transmision" />
            {transmission}
          </InfoItem>
        )}

        {ifDetails(details.airConditioner) && (
          <InfoItem>
            <InfoImg src={ImgClimat} alt="Conditioner" />
            {details.airConditioner && 'AC'}
          </InfoItem>
        )}

        {ifDetails(ImgPetrol) && (
          <InfoItem>
            <InfoImg src={ImgPetrol} alt="Petrol" />
            {engine}
          </InfoItem>
        )}

        {ifDetails(ImgKitchen) && (
          <InfoItem>
            <InfoImg src={ImgKitchen} alt="Kitchen" />
            {details.kitchen && 'Kitchen'}
          </InfoItem>
        )}

        {ifDetails(ImgBeds) && (
          <InfoItem>
            <InfoImg src={ImgBeds} alt="beds" />
            {details.beds} beds
          </InfoItem>
        )}

        {ifDetails(details.airConditioner) && (
          <InfoItem>
            <InfoImg src={ImgAir} alt="Conditioner" />
            {details.airConditioner}
            <p>air conditioner</p>
          </InfoItem>
        )}

        {ifDetails(details.CD) && (
          <InfoItem>
            <InfoImg src={ImgCD} alt="Conditioner" />
            <p>CD</p>
          </InfoItem>
        )}

        {ifDetails(details.radio) && (
          <InfoItem>
            <InfoImg src={ImgRadio} alt="Conditioner" />
            <p>Radio</p>
          </InfoItem>
        )}

        {ifDetails(details.hob) && (
          <InfoItem>
            <InfoImg src={ImgHob} alt="Conditioner" />
            {details.hob}
            <p>Hob</p>
          </InfoItem>
        )}
      </InfoList>

      <InfoTitle>Vehicle details</InfoTitle>
      <BarLine></BarLine>

  
        <DetailsList>
          <DetailsItem>
            <DetailsItemName>Form</DetailsItemName>
            <DetailsItemName>{upperText(form)}</DetailsItemName>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemName>Length</DetailsItemName>
            <DetailsItemName>{corectDetails(length)}</DetailsItemName>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemName>Width</DetailsItemName>
            <DetailsItemName>{corectDetails(width)}</DetailsItemName>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemName>Height</DetailsItemName>
            <DetailsItemName>{corectDetails(height)}</DetailsItemName>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemName>Tank</DetailsItemName>
            <DetailsItemName>{corectDetails(tank)}</DetailsItemName>
          </DetailsItem>
          <DetailsItem>
            <DetailsItemName>Consumption</DetailsItemName>
            <DetailsItemName>{consumption}</DetailsItemName>
          </DetailsItem>
        </DetailsList>
     
    </InfoWrapper>
  );
};

export default CamperFeatures;
