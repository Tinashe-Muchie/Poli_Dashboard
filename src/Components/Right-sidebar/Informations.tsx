import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BiDotsHorizontalRounded, BiChevronDown } from "react-icons/bi";
import { MdCoronavirus } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';

export const INFORMATION = () => {
  return (
    <div className="information_wrapper">
      <div>
        <span>Informations</span>
        <span>
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <div className="calendar">
       <Calendar  calendarType='US'/>
      </div>
      <div className="appointment_list">
        Appointment List
      </div>
      <div className="tests_tile">
        <div className="tests_tile_content">
          <div>
            <MdCoronavirus />
          </div>
          <div>
            <span>
              Covid Swab Test
            </span>
            <span>
              8:00 am - 4:00 pm
            </span>
            <span>
              120 participants
            </span>
          </div>
        </div>
        <div className="tests_tile_content_arrow">
          <div>
            hello
          </div>
          <div>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
      <div className="tests_tile">
        <div className="tests_tile_content">
          <div>
            <FaHeartbeat />
          </div>
          <div>
            <span>
              Covid Rapid Test
            </span>
            <span>
              9:00 am - 5:00 pm
            </span>
            <span>
              240 participants
            </span>
          </div>
        </div>
        <div className="tests_tile_content_arrow">
          <div>
            hello
          </div>
          <div>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </div>
  );
};
