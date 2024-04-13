import { BarApp, BarName } from "./FiltersBar.module";

const FiltersBar = () => {
  return (
   <BarApp>
     <form>
      <div>
        <BarName>Location</BarName>
        <label>
          <input type="text" />
        </label>
      </div>

      <div>
        <BarName>Filters</BarName>
        <div>
          <p>Vehicle equipment</p>
        </div>

        <div>
          <p>Vehicle type</p>
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
   </BarApp>
  );
};

export default FiltersBar;
