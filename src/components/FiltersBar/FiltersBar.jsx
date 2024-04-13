import { BarApp, BarName, BarForm, BarInfo, BarInput, BarNameFilter, BarLine, NameFilter, Button } from './FiltersBar.module';

const FiltersBar = () => {
  return (
    <BarApp>
      <BarForm>
        <BarInfo>
          <BarName>Location</BarName>
          <label>
            <BarInput type="text" placeholder="Kyiv, Ukraine" />
          </label>
        </BarInfo>

        <div>
          <BarNameFilter>Filters</BarNameFilter>
          <div>
            <NameFilter>Vehicle equipment</NameFilter>
            <BarLine></BarLine>
          </div>

          <div>
            <NameFilter>Vehicle type</NameFilter>
            <BarLine></BarLine>
          </div>
        </div>
        <Button type="submit">Search</Button>
      </BarForm>
    </BarApp>
  );
};

export default FiltersBar;
