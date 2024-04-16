import ifDetailsImg from 'utils/ifDetailsImg';
import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';

import ImgCD from '../../images/cd.svg';
import ImgHob from '../../images/hob.svg';
import ImgRadio from '../../images/radio.svg';

import { InfoWrapper, InfoList, InfoItem, InfoImg, BarLine } from './CamperFeatures.module';

const CamperFeatures = ({ data }) => {
  console.log('data', data);

  const { adults, transmission, details, engine } = data;

  return (
    <InfoWrapper>
      <InfoList>
        {ifDetailsImg(adults) && (
          <InfoItem>
            <InfoImg src={ImgAdults} alt="Adults" />
            {adults} adults
          </InfoItem>
        )}

        {ifDetailsImg(transmission) && (
          <InfoItem>
            <InfoImg src={ImgTransmision} alt="Transmision" />
            {transmission}
          </InfoItem>
        )}

        {ifDetailsImg(details.airConditioner) && (
          <InfoItem>
            <InfoImg src={ImgClimat} alt="Conditioner" />
            {details.airConditioner && 'AC'}
          </InfoItem>
        )}

        {ifDetailsImg(ImgPetrol) && (
          <InfoItem>
            <InfoImg src={ImgPetrol} alt="Petrol" />
            {engine}
          </InfoItem>
        )}

        {ifDetailsImg(ImgKitchen) && (
          <InfoItem>
            <InfoImg src={ImgKitchen} alt="Kitchen" />
            {details.kitchen && 'Kitchen'}
          </InfoItem>
        )}

        {ifDetailsImg(ImgBeds) && (
          <InfoItem>
            <InfoImg src={ImgBeds} alt="beds" />
            {details.beds} beds
          </InfoItem>
        )}

        {ifDetailsImg(details.airConditioner) && (
          <InfoItem>
            <InfoImg src={ImgClimat} alt="Conditioner" />
            {details.airConditioner}
            <p>air conditioner</p>
          </InfoItem>
        )}

        {ifDetailsImg(details.CD) && (
          <InfoItem>
            <InfoImg src={ImgCD} alt="Conditioner" />
            <p>CD</p>
          </InfoItem>
        )}

        {ifDetailsImg(details.radio) && (
          <InfoItem>
            <InfoImg src={ImgRadio} alt="Conditioner" />
            <p>Radio</p>
          </InfoItem>
        )}

        {ifDetailsImg(details.hob) && (
          <InfoItem>
            <InfoImg src={ImgHob} alt="Conditioner" />
            {details.hob}
            <p>Hob</p>
          </InfoItem>
        )}
      </InfoList>

      <h2>Vehicle details</h2>
      <BarLine></BarLine>

      
    </InfoWrapper>
  );
};

export default CamperFeatures;
