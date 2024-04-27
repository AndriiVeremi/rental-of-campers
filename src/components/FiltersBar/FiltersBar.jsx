import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFilters } from 'store/advertsSlice';
import { fetchCamperAll } from 'store/operations';

import MainButton from 'components/MainButton/MainButton';
import { MoreButton } from 'components/MainButton/MainButton.styled';

import { ReactComponent as Transmision } from '../../images/icons/transmision.svg';
import { ReactComponent as Tv } from '../../images/icons/tv.svg';
import { ReactComponent as Kitchen } from '../../images/icons/kitchen.svg';
import { ReactComponent as Shover } from '../../images/icons/shover.svg';
import { ReactComponent as Climat } from '../../images/icons/vind.svg';
import { ReactComponent as Aalcon } from '../../images/icons/campVan.svg';
import { ReactComponent as Van } from '../../images/icons/campValcon.svg';
import { ReactComponent as Integ } from '../../images/icons/campInteg.svg';
import { ReactComponent as Bathroom } from '../../images/icons/bathroom.svg';
import { ReactComponent as Children } from '../../images/icons/children.svg';
import { ReactComponent as Gas } from '../../images/icons/gas.svg';
import { ReactComponent as Microwave } from '../../images/icons/microwave.svg';
import { ReactComponent as Toilet } from '../../images/icons/toilet.svg';
import { ReactComponent as Water } from '../../images/icons/water.svg';
import { ReactComponent as Cd } from '../../images/icons/cd.svg';
import { ReactComponent as Hob } from '../../images/icons/hob.svg';
import { ReactComponent as Freezer } from '../../images/icons/freezer.svg';
import { ReactComponent as Radio } from '../../images/icons/radio.svg';

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
  Maps,
  MapsWrap,
  WrapperButton,
} from './FiltersBar.module';

const FiltersBar = data => {
  const dispatch = useDispatch();

  const initialStateLocation = '';
  const initialStateTransmission = {
    transmission: false,
  };

  const initialStateDetails = {
    airConditioner: false,
    kitchen: false,
    TV: false,
    shower: false,
    bathroom: false,
    children: false,
    gas: false,
    microwave: false,
    toilet: false,
    water: false,
    CD: false,
    hob: false,
    freezer: false,
    radio: false,
  };
  const initialStateForm = {
    vehicleType: '',
  };

  const [location, setLocation] = useState(initialStateLocation);

  const [transmission, setTransmission] = useState(initialStateTransmission);

  const [details, setDetails] = useState(initialStateDetails);

  const [form, setForm] = useState(initialStateForm);

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

  const handleVehicleTypeChange = e => {
    const { value } = e.target;
    setForm({ ...form, vehicleType: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addFilters({ location, transmission, details, form }));
    dispatch(fetchCamperAll());
  };

  const handleReset = e => {
    e.preventDefault();
    setLocation(initialStateLocation);
    setTransmission(initialStateTransmission);
    setDetails(initialStateDetails);
    setForm(initialStateForm);
  };

  return (
    <BarApp>
      <BarForm>
        <BarInfo>
          <BarName>Location</BarName>
          <MapsWrap>
            <BarInput value={location} onChange={handleChangeLocation} required placeholder="City" />
            <Maps style={{ marginRight: '8px', width: '18', height: '20' }} />
          </MapsWrap>
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

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="bathroom"
                  checked={details.bathroom}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.bathroom}>
                  <Bathroom style={{ width: '32', height: '32' }} />
                  Bathroom
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="children"
                  checked={details.children}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.children}>
                  <Children style={{ width: '32', height: '32' }} />
                  Children
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="gas" checked={details.gas} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.gas}>
                  <Gas style={{ width: '32', height: '32' }} />
                  Gas
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="microwave"
                  checked={details.microwave}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.microwave}>
                  <Microwave style={{ width: '32', height: '32' }} />
                  Microwave
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="toilet" checked={details.toilet} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.toilet}>
                  <Toilet style={{ width: '32', height: '32' }} />
                  Toilet
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="water" checked={details.water} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.water}>
                  <Water style={{ width: '32', height: '32' }} />
                  Water
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="CD" checked={details.CD} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.CD}>
                  <Cd style={{ width: '32', height: '32' }} />
                  CD
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="hob" checked={details.hob} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.hob}>
                  <Hob style={{ width: '32', height: '32' }} />
                  Hob
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  name="freezer"
                  checked={details.freezer}
                  onChange={handleCheckboxChange}
                />
                <CheckboxCheckmark checked={details.freezer}>
                  <Freezer style={{ width: '32', height: '32' }} />
                  Freezer
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" name="radio" checked={details.radio} onChange={handleCheckboxChange} />
                <CheckboxCheckmark checked={details.radio}>
                  <Radio style={{ width: '32', height: '32' }} />
                  Radio
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
                  type="radio"
                  name="vehicleType"
                  value="panelTruck"
                  checked={form.vehicleType === 'panelTruck'}
                  onChange={handleVehicleTypeChange}
                />
                <CheckboxCheckmark checked={form.vehicleType === 'panelTruck'}>
                  <Van style={{ width: '40px', height: '28px' }} />
                  Van
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                  checked={form.vehicleType === 'fullyIntegrated'}
                  onChange={handleVehicleTypeChange}
                />
                <CheckboxCheckmark checked={form.vehicleType === 'fullyIntegrated'}>
                  <Integ style={{ width: '40px', height: '28px' }} />
                  Fully Integrated
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>

            <li>
              <CheckboxWrapper>
                <CheckboxInput
                  type="radio"
                  name="vehicleType"
                  value="alcove"
                  checked={form.vehicleType === 'alcove'}
                  onChange={handleVehicleTypeChange}
                />
                <CheckboxCheckmark checked={form.vehicleType === 'alcove'}>
                  <Aalcon style={{ width: '40px', height: '28px', fill: '#101828' }} />
                  Alcove
                </CheckboxCheckmark>
              </CheckboxWrapper>
            </li>
          </VehicleTypeList>
        </div>

        <WrapperButton>
          <MainButton type="submit" size="large" onClick={handleSubmit}>
            Search
          </MainButton>

          <MoreButton type="button" size="large" onClick={handleReset}>
            Reset
          </MoreButton>
        </WrapperButton>
      </BarForm>
    </BarApp>
  );
};

export default FiltersBar;
