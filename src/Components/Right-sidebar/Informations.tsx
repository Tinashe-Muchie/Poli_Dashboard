import { BiDotsHorizontalRounded, BiChevronDown } from "react-icons/bi";

interface monthsIF {
  id: number;
  title: string;
}

const Months: monthsIF[] = [
  {
    id: 1,
    title: "Jan"
  },
  {
    id: 2,
    title: "Feb"
  },
  {
    id: 3,
    title: "Mar"
  },
  {
    id: 4,
    title: "Apr"
  },
  {
    id: 5,
    title: "May"
  },
  {
    id: 6,
    title: "Jun"
  },
  {
    id: 7,
    title: "Jul"
  },
  {
    id: 8,
    title: "Aug"
  },
  {
    id: 9,
    title: "Sep"
  },
  {
    id: 10,
    title: "Oct"
  },
  {
    id: 11,
    title: "Nov"
  },
  {
    id: 12,
    title: "Dec"
  }
];
const MonthList = Months.map((month) => {
  return <li key={month.id}>{month.title}</li>;
});
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
        <ul>
          {MonthList} <BiChevronDown />
        </ul>
      </div>
    </div>
  );
};
