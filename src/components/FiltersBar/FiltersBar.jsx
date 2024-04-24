import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFilters } from 'store/filtersSlice';
import { fetchCamperAll } from 'store/operations';

import MainButton from 'components/MainButton/MainButton';

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
  VehicleTypeList,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxCheckmark,
} from './FiltersBar.module';

const FiltersBar = data => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');

  const [transmission, setTransmission] = useState({
    transmission: false,
  });

  const [details, setDetails] = useState({
    airConditioner: false,
    kitchen: false,
    TV: false,
    shower: false,
  });
  const [form, setForm] = useState({
    panelTruck: false,
    integ: false,
    alcove: false,
  });

  const handleChangeLocation = e => {
    setLocation(e.target.value);
  };

  const handleChangeTransmision = e => {
    const { name, checked } = e.target;
    setTransmission({ ...transmission, [name]: checked });
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setDetails({ ...details, [name]: checked });
  };

  const handleCheckboxType = e => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addFilters({ location, transmission, details, form }));
    dispatch(fetchCamperAll());

    console.log('dispatchFilters:', { location, transmission, details, form });
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
                <CheckboxInput
                  type="checkbox"
                  name="airConditioner"
                  checked={details.airConditioner}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.airConditioner}>
                  <Climat style={{ width: '32', height: '32' }} />
                  AC
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="transmission"
                  checked={transmission.transmission}
                  onChange={handleChangeTransmision}
                />
                <CheckboxCheckmark checked={transmission.transmission}>
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
                <CheckboxInput type="checkbox" name="TV" checked={details.TV} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.TV}>
                  <Tv style={{ width: '32', height: '32' }} />
                  TV
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="shower" checked={details.shower} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.shower}>
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
                <CheckboxInput
                  type="checkbox"
                  name="panelTruck"
                  checked={form.panelTruck}
                  onChange={handleCheckboxType}
                />
                <CheckboxCheckmark checked={form.panelTruck}>
                  <Van style={{ width: '40px', height: '28px' }} />
                  Van
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="integ" checked={form.integ} onChange={handleCheckboxType} />
                <CheckboxCheckmark checked={form.integ}>
                  <Integ style={{ width: '40px', height: '28px' }} />
                  Fully Integrated
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="alcove" checked={form.alcove} onChange={handleCheckboxType} />
                <CheckboxCheckmark checked={form.alcove}>
                  <Aalcon style={{ width: '40px', height: '28px' }} />
                  Alcove
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>
          </VehicleTypeList>
        </div>

        <MainButton type="submit" size="large" onClick={handleSubmit}>
          Search
        </MainButton>
      </BarForm>
    </BarApp>
  );
};

export default FiltersBar;
