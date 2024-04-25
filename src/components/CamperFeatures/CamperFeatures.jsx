import { renderIfDetails } from 'utils/ifDetails';
import { corectDetails } from 'utils/corectDetails';
import { upperText } from 'utils/upperText';

import { ReactComponent as Adult } from '../../images/adult.svg';
import { ReactComponent as Transmision } from '../../images/transmision.svg';
import { ReactComponent as Benz } from '../../images/benz.svg';
import { ReactComponent as Kitchen } from '../../images/kitchen.svg';
import { ReactComponent as Beds } from '../../images/beds.svg';
import { ReactComponent as Vind } from '../../images/vind.svg';
import { ReactComponent as Gas } from '../../images/gas.svg';
import { ReactComponent as Microwave } from '../../images/microwave.svg';
import { ReactComponent as Toilet } from '../../images/toilet.svg';
import { ReactComponent as Water } from '../../images/water.svg';
import { ReactComponent as Cd } from '../../images/cd.svg';
import { ReactComponent as Hob } from '../../images/hob.svg';
import { ReactComponent as TV } from '../../images/tv.svg';
import { ReactComponent as Freezer } from '../../images/freezer.svg';
import { ReactComponent as Radio } from '../../images/radio.svg';

import {
  InfoWrapper,
  InfoList,
  InfoTitle,
  BarLine,
  DetailsList,
  DetailsItem,
  DetailsItemName,
} from './CamperFeatures.module';

const CamperFeatures = ({ data }) => {
  const { adults, transmission, details, engine, form, length, width, height, tank, consumption } = data;

  return (
    <InfoWrapper>
      <InfoList>
        {renderIfDetails(adults, <Adult style={{ marginRight: '8px' }} />, `${adults} adults`)}
        {renderIfDetails(transmission, <Transmision style={{ marginRight: '8px' }} />, transmission)}
        {renderIfDetails(engine, <Benz style={{ marginRight: '8px' }} />, engine)}
        {renderIfDetails(details.kitchen, <Kitchen style={{ marginRight: '8px' }} />, details.kitchen && 'kitchen')}
        {renderIfDetails(details.beds, <Beds style={{ marginRight: '8px' }} />, `${details.beds} beds`)}
        {renderIfDetails(
          details.airConditioner,
          <Vind style={{ marginRight: '8px' }} />,
          details.airConditioner && 'ac'
        )}
        {renderIfDetails(details.gas, <Gas style={{ marginRight: '8px' }} />, `gas ${details.gas}`)}
        {renderIfDetails(
          details.microwave,
          <Microwave style={{ marginRight: '8px' }} />,
          details.microwave && 'microwave'
        )}
        {renderIfDetails(details.toilet, <Toilet style={{ marginRight: '8px' }} />, details.toilet && 'toilet')}
        {renderIfDetails(details.water, <Water style={{ marginRight: '8px' }} />, `water ${details.water}`)}
        {renderIfDetails(details.CD, <Cd style={{ marginRight: '8px' }} />, details.CD && 'cd')}
        {renderIfDetails(details.freezer, <Hob style={{ marginRight: '8px' }} />, `${details.freezer} hob`)}
        {renderIfDetails(details.TV, <TV style={{ marginRight: '8px' }} />, details.TV && 'tv')}
        {renderIfDetails(details.freezer, <Freezer style={{ marginRight: '8px' }} />, details.freezer && 'treezer')}
        {renderIfDetails(details.radio, <Radio style={{ marginRight: '8px' }} />, details.radio && 'radio')}
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
