import { 
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft
} from 'react-icons/fa';

interface dateIF {
  id: number;
  title: string;
}

/*const month: dateIF[] = [
  {id: 0,title: 'January'},{id: 1,title: 'February'},{id: 2,title: 'March'},{id: 3,title: 'April'},{id: 4,title: 'May'},{id: 5,title: 'June'},{id: 6,title: 'July'},{id: 7,title: 'August'},{id: 8,title: 'September'},{id: 9,title: 'October'},{id: 10,title: 'November'},{id: 11,title: 'December'}
];*/

const date: dateIF[] = [
  {id: 0,title: 'Mon'},{id: 1,title: 'Tue'},{id: 2,title: 'Wed'},{id: 3,title: 'Thu'},{id: 4,title: 'Fri'},{id: 5,title: 'Sat'},{id: 6,title: 'Sun'}
];

/*const showMonth = month.map(month => (
  <li key={month.id}>
    {month.title}
  </li>
));*/

const showDate = date.map(date => (
  <li key={date.id} className="date_list">
    {date.title}
  </li>
));

export const CALENDAR = () => {
  return(
    <div className="calendar_wrapper">
      <div className="month">
        <span>
          <FaArrowAltCircleLeft />
        </span>
        <select name="months">
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>
        <span>
          <FaArrowAltCircleRight />
        </span>
      </div>
      <div className="date">
        <ul>
          {showDate}
        </ul>
      </div>
    </div>
  );
};