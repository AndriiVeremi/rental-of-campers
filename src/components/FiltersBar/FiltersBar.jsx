import { BarApp } from "./FiltersBar.module";

const FiltersBar = () => {
  return (
   <BarApp>
     <form>
      <div>
        <p>Location</p>
        <label>
          <input type="text" />
        </label>
      </div>

      <div>
        <p>Filters</p>

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
