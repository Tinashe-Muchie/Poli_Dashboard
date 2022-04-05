import Calendar from 'react-calendar';
import { BiDotsHorizontalRounded, BiChevronDown } from "react-icons/bi";


export const INFORMATION = () => {
  return (
    <div className="information_wrapper">
      <div>
        <span>Informations</span>
        <span>
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <div>
       <Calendar />
      </div>
    </div>
  );
};
