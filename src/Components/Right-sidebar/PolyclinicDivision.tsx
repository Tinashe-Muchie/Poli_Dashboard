import { FaTooth, FaLungs, FaFlask } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const POLY_DIVISION = () => {
  return (
    <div className="poly_division_wrapper">
      <div>
        <span>Polyclinic Division</span>
        <span>
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <div className="polyclinic_content">
        <div className="dental">
          <FaTooth />
        </div>
        <div>
          <span>Dental Polyclinic</span>
          <span>Open: 07:00 - 11:00AM</span>
        </div>
      </div>
      <div className="polyclinic_content">
        <div className="cardiac">
          <FaLungs />
        </div>
        <div>
          <span>Cardiac Polyclinic</span>
          <span>Open: 07:00 - 11:30AM</span>
        </div>
      </div>
      <div className="polyclinic_content">
        <div className="radiology">
          <FaFlask />
        </div>
        <div>
          <span>Radiology Polyclinic</span>
          <span>Open: 07:00 - 11:00AM</span>
        </div>
      </div>
      <input type="button" value="See more Polyclinic" />
    </div>
  );
};
