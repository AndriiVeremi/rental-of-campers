import { useState } from 'react';

import { ReactComponent as Transmision } from '../../images/transmision.svg';
import { ReactComponent as Tv } from '../../images/tv.svg';
import { ReactComponent as Kitchen } from '../../images/kitchen.svg';
import { ReactComponent as Shover } from '../../images/shover.svg';
import { ReactComponent as Climat } from '../../images/vind.svg';
import { ReactComponent as Van } from '../../images/campVan.svg';
import { ReactComponent as Aalcon } from '../../images/campValcon.svg';
import { ReactComponent as Integ } from '../../images/campInteg.svg';

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
  VehicleTypeList,
  Button,
} from './FiltersBar.module';

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
                <Climat style={{ width: '32', height: '32' }} />
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
                <Transmision style={{ width: '32', height: '32' }} />
                Automatic
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="kitchen" checked={details.kitchen} onChange={handleCheckboxChange} />
                <Kitchen style={{ width: '32', height: '32' }} />
                Kitchen
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="tv" checked={details.tv} onChange={handleCheckboxChange} />
                <Tv style={{ width: '32', height: '32' }} />
                TV
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="shower" checked={details.showers} onChange={handleCheckboxChange} />
                <Shover style={{ width: '32', height: '32' }} />
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
                <Van style={{ width: '40px', height: '28px' }} />
                Van
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="integ" checked={type.integ} onChange={handleCheckboxType} />
                <Integ style={{ width: '40px', height: '28px' }} />
                Fully Integrated
              </OptionsLable>
            </li>

            <li>
              <OptionsLable>
                <input type="checkbox" name="alcove" checked={type.alcove} onChange={handleCheckboxType} />
                <Aalcon style={{ width: '40px', height: '28px' }} />
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
