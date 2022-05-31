import { FaRegBell, FaUser } from "react-icons/fa";

export const SEARCH_BAR = () => {
  return (
    <div className="Search_bar_wrapper">
      <form>
        <input type="text" placeholder="Search..." />
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
        <div className="Admin_info">
          <div>
            <FaUser />
          </div>
          <div>
            <span>Tendai Kutswa</span>
            <span>Admin Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};
