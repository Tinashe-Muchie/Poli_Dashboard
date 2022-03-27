import { FaRegBell } from "react-icons/fa";

export const SEARCH_BAR = () => {
  return (
  <div className="Search_bar_wrapper">
    <form>
      <input 
        type="text"
        placeholder="&#61442; Search..."
      />
      <select>
        <option value="filter"> Filter </option>
        <option value="patients"> Patients </option>
        <option value="doctors"> Doctors </option>
      </select>
    </form>
    <div>
      <div className="Search_bar_bell">
        <FaRegBell />
      </div>
      <div>
        <span>

        </span>
        <span>
          Tendai Kutswa
        </span>
        <span>
          Admin Manager
        </span>
      </div>
    </div>
  </div>
  );
};
