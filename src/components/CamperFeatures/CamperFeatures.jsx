import { ifDetails } from 'utils/ifDetails';
import { corectDetails } from 'utils/corectDetails';
import { upperText } from 'utils/upperText';

import { ReactComponent as Adult } from "../../images/adult.svg";
import { ReactComponent as Transmision } from "../../images/transmision.svg";
import { ReactComponent as Benz } from "../../images/benz.svg";
import { ReactComponent as Kitchen } from "../../images/kitchen.svg";
import { ReactComponent as Beds } from "../../images/beds.svg";
import { ReactComponent as Vind } from "../../images/vind.svg";
import { ReactComponent as Air } from "../../images/air.svg";
import { ReactComponent as Cd } from "../../images/cd.svg";
import { ReactComponent as Hob } from "../../images/hob.svg";
import { ReactComponent as Radio } from "../../images/radio.svg";


import { InfoWrapper, InfoList, InfoItem, InfoTitle, BarLine, DetailsList, DetailsItem, DetailsItemName} from './CamperFeatures.module';

const CamperFeatures = ({ data }) => {
console.log('data',data)
  const { adults, transmission, details, engine, form, length, width, height, tank, consumption } = data;

  return (
    <InfoWrapper>
      <InfoList>
        {ifDetails(adults) && (
          <InfoItem>
            <Adult />
            {adults} adults
          </InfoItem>
        )}

        {ifDetails(transmission) && (
          <InfoItem>
             <Transmision style={{marginRight:"8px"}}/>
            {transmission}
          </InfoItem>
        )}

        {ifDetails(details.airConditioner) && (
          <InfoItem>
            <Vind />
            {details.airConditioner && 'AC'}
          </InfoItem>
        )}

        {ifDetails(engine) && (
          <InfoItem>
            <Benz />
            {engine}
          </InfoItem>
        )}

        {ifDetails(details.kitchen) && (
          <InfoItem>
            <Kitchen/>
            {details.kitchen && 'Kitchen'}
          </InfoItem>
        )}

        {ifDetails(details.beds) && (
          <InfoItem>
            <Beds style={{marginRight:"8px"}}/>
            {details.beds} beds
          </InfoItem>
        )}

        {ifDetails(details.airConditioner) && (
          <InfoItem>
            <Air />
            {details.airConditioner}
            <p>air conditioner</p>
          </InfoItem>
        )}

        {ifDetails(details.CD) && (
          <InfoItem>
            <Cd />
            <p>CD</p>
          </InfoItem>
        )}

        {ifDetails(details.radio) && (
          <InfoItem>
            <Radio />
            <p>Radio</p>
          </InfoItem>
        )}

        {ifDetails(details.hob) && (
          <InfoItem>
            <Hob style={{marginRight:"8px"}}/>
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
