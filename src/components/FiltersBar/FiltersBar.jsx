import CheckboxForm from 'components/FiltersOptions/FiltersOptions';
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
  Button,
} from './FiltersBar.module';

const FiltersBar = data => {
  return (
    <BarApp>
      <BarForm>
        <BarInfo>
          <BarName>Location</BarName>
          <BarInput name="location" type="text" required placeholder="Kyiv, Ukraine" />
        </BarInfo>

        <div>
          <BarNameFilter>Filters</BarNameFilter>
          <NameFilter>Vehicle equipment</NameFilter>
          <BarLine></BarLine>

          <CheckboxForm/>
          <VehicleOptionsList>
            <li></li>
          </VehicleOptionsList>
        </div>

        <NameFilter>Vehicle type</NameFilter>

        <Button type="submit" >
          Search
        </Button>
      </BarForm>
    </BarApp>
  );
};

export default FiltersBar;
