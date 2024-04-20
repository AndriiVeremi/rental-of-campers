import React, { useState } from 'react';
import { OptionsLable } from './FiltersOptions.styled';

import ImgAdults from '../../images/adult.svg';
import ImgTransmision from '../../images/transmision.svg';
import ImgPetrol from '../../images/benz.svg';
import ImgKitchen from '../../images/kitchen.svg';
import ImgBeds from '../../images/beds.svg';
import ImgClimat from '../../images/vind.svg';
import MapImg from '../../images/map.svg';
import ImgStar from '../../images/star.svg';
import Haert from '../../images/heart.svg';

const CheckboxForm = () => {

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <div>
      <OptionsLable>
        {/* <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        Checkbox 1
      <img src={ImgClimat} width={24} alt="Climat" /> */}
      </OptionsLable>
      <br />
      <CheckboxForm>
        {/* <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        Checkbox 2
        <img src={ImgTransmision} width={24} alt="Transmision" /> */}
      </CheckboxForm>
      <br />
      {/* <CheckboxForm>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        Checkbox 3
      </CheckboxForm> */}
      <br />
      {/* <CheckboxForm>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        Checkbox 5
      </CheckboxForm> */}
      {/* <CheckboxForm>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        Checkbox 6
      </CheckboxForm> */}
      {/* <CheckboxForm>
        <input
          type="checkbox"
          name="checkbox6"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
        />
        Checkbox 4
      </CheckboxForm> */}
    </div>
  );
}

export default CheckboxForm;