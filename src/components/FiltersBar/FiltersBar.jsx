import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFilters } from 'store/advertsSlice';
import { fetchCamperAll } from 'store/operations';

import MainButton from 'components/MainButton/MainButton';
import { MoreButton } from 'components/MainButton/MainButton.styled';

import { ReactComponent as Transmision } from '../../images/transmision.svg';
import { ReactComponent as Tv } from '../../images/tv.svg';
import { ReactComponent as Kitchen } from '../../images/kitchen.svg';
import { ReactComponent as Shover } from '../../images/shover.svg';
import { ReactComponent as Climat } from '../../images/vind.svg';
import { ReactComponent as Aalcon } from '../../images/campVan.svg';
import { ReactComponent as Van } from '../../images/campValcon.svg';
import { ReactComponent as Integ } from '../../images/campInteg.svg';
import { ReactComponent as Bathroom } from '../../images/bathroom.svg';
import { ReactComponent as Children } from '../../images/children.svg';
import { ReactComponent as Gas } from '../../images/gas.svg';
import { ReactComponent as Microwave } from '../../images/microwave.svg';
import { ReactComponent as Toilet } from '../../images/toilet.svg';
import { ReactComponent as Water } from '../../images/water.svg';
import { ReactComponent as Cd } from '../../images/cd.svg';
import { ReactComponent as Hob } from '../../images/hob.svg';
import { ReactComponent as Freezer } from '../../images/freezer.svg';
import { ReactComponent as Radio } from '../../images/radio.svg';


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
  WrapperButton
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
    panelTruck: false,
    integ: false,
    alcove: false,
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

  const handleCheckboxType = e => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
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
                  <Aalcon style={{ width: '40px', height: '28px', fill: "#101828" }} />
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
