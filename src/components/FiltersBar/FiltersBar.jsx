import { useState } from 'react';
import { useDispatch } from 'react-redux';

import MainButton from 'components/MainButton/MainButton';

import { ReactComponent as Transmision } from '../../images/transmision.svg';
import { ReactComponent as Tv } from '../../images/tv.svg';
import { ReactComponent as Kitchen } from '../../images/kitchen.svg';
import { ReactComponent as Shover } from '../../images/shover.svg';
import { ReactComponent as Climat } from '../../images/vind.svg';
import { ReactComponent as Van } from '../../images/campVan.svg';
import { ReactComponent as Aalcon } from '../../images/campValcon.svg';
import { ReactComponent as Integ } from '../../images/campInteg.svg';

import { addFilters } from 'store/filtersSlice';

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
  VehicleTypeList,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxCheckmark,
} from './FiltersBar.module';

const FiltersBar = data => {
  const dispatch = useDispatch();

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

    dispatch(addFilters({ location, ...details, ...type }));

    // console.log('location:', location);
    // console.log('details:', details);
    // console.log('type:', type);
   
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
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="ac" checked={details.ac} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.ac}>
                  <Climat style={{ width: '32', height: '32' }} />
                  AC
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="transmision"
                  checked={details.transmision}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.transmision}>
                  <Transmision style={{ width: '32', height: '32' }} />
                  Automatic
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="kitchen"
                  checked={details.kitchen}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.kitchen}>
                  <Kitchen style={{ width: '32', height: '32' }} />
                  Kitchen
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="tv" checked={details.tv} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.tv}>
                  <Tv style={{ width: '32', height: '32' }} />
                  TV
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="shovers"
                  checked={details.shovers}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.shovers}>
                  <Shover style={{ width: '32', height: '32' }} />
                  Shower/WC
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>
          </VehicleOptionsList>
        </div>

        <div>
          <NameFilter>Vehicle type</NameFilter>
          <BarLine></BarLine>

          <VehicleTypeList>
            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="van" checked={type.van} onChange={handleCheckboxType} />
                <CheckboxCheckmark checked={type.van}>
                  <Van style={{ width: '40px', height: '28px' }} />
                  Van
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="integ" checked={type.integ} onChange={handleCheckboxType} />
                <CheckboxCheckmark checked={type.integ}>
                  <Integ style={{ width: '40px', height: '28px' }} />
                  Fully Integrated
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="alcove" checked={type.alcove} onChange={handleCheckboxType} />
                <CheckboxCheckmark checked={type.alcove}>
                  <Aalcon style={{ width: '40px', height: '28px' }} />
                  Alcove
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>
          </VehicleTypeList>
        </div>

        <MainButton type="submit" size="large" onClick={handleSubmit}>Search</MainButton>

      </BarForm>
    </BarApp>
  );
};

export default FiltersBar;
