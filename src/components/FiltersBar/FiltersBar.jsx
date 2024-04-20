import { useState } from 'react';
import {
  BarApp,
  BarName,
  BarForm,
  BarInfo,
  BarInput,
  BarNameFilter,
  BarLine,
  NameFilter,
  VehicleOptionsList,
  OptionsLable,
  InfoImg,
  VehicleTypeList,
  TypeImg,
  Button,
} from './FiltersBar.module';

import ImgTransmision from '../../images/transmision.svg';
import ImgTV from '../../images/tv.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgShover from '../../images/shover.svg';
import ImgClimat from '../../images/vind.svg';
import ImgCampVan from '../../images/campVan.svg';
import ImgCampValcon from '../../images/campValcon.svg';
import ImgCampInteg from '../../images/campInteg.svg';

const FiltersBar = data => {
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState({
    ac: false,
    transmision: false,
    kitchen: false,
    tv: false,
    shovers: false,
  });
  const [type, setTypeCamp] = useState({
    van: false,
    integ: false,
    alcove: false,
  });

  const handleChangeLocation = e => {
    setLocation(e.target.value);
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setDetails({ ...details, [name]: checked });
  };

  const handleCheckboxType = e => {
    const { name, checked } = e.target;
    setTypeCamp({ ...type, [name]: checked });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('location:', location);
    console.log('details:', details);
    console.log('type:', type);
  };

  return (
    <BarApp>
      <BarForm>
        <BarInfo>
          <BarName>Location</BarName>
          <BarInput value={location} onChange={handleChangeLocation} required placeholder="Kyiv, Ukraine" />
        </BarInfo>

        <div>
          <BarNameFilter>Filters</BarNameFilter>
          <NameFilter>Vehicle equipment</NameFilter>
          <BarLine></BarLine>

          <VehicleOptionsList>
            <li>
              <OptionsLable>
                <input type="checkbox" name="ac" checked={details.ac} onChange={handleCheckboxChange} />
                <InfoImg src={ImgClimat} alt="Conditioner" />
                AC
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input
                  type="checkbox"
                  name="transmision"
                  checked={details.transmision}
                  onChange={handleCheckboxChange}
                />
                <InfoImg src={ImgTransmision} alt="Transmision" />
                Automatic
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="kitchen" checked={details.kitchen} onChange={handleCheckboxChange} />
                <InfoImg src={ImgKitchen} alt="Kitchen" />
                Kitchen
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="tv" checked={details.tv} onChange={handleCheckboxChange} />
                <InfoImg src={ImgTV} alt="Tv" />
                TV
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="shower" checked={details.showers} onChange={handleCheckboxChange} />
                <InfoImg src={ImgShover} alt="Shover" />
                Shower/WC
              </OptionsLable>
            </li>
          </VehicleOptionsList>
        </div>

        <div>
          <NameFilter>Vehicle type</NameFilter>
          <BarLine></BarLine>

          <VehicleTypeList>
            <li>
              <OptionsLable>
                <input type="checkbox" name="van" checked={type.van} onChange={handleCheckboxType} />
                <TypeImg src={ImgCampVan} alt="CampVan" />
                Van
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="integ" checked={type.integ} onChange={handleCheckboxType} />
                <TypeImg src={ImgCampInteg} alt="CampInteg" />
                Fully Integrated
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="alcove" checked={type.alcove} onChange={handleCheckboxType} />
                <TypeImg src={ImgCampValcon} alt="Alcove" />
                Alcove
              </OptionsLable>
            </li>
          </VehicleTypeList>
        </div>

        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </BarForm>
    </BarApp>
  );
};

export default FiltersBar;
