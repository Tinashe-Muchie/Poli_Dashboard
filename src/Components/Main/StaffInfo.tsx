import { ReactNode } from "react";
import { FaBriefcaseMedical, FaStethoscope, FaUserNurse } from "react-icons/fa";

interface staff_info_fc {
  id: number;
  icon: ReactNode;
  title: string;
  total_num: number;
}

const staff_info: staff_info_fc[] = [
  {
    id: 1,
    icon: <FaUserNurse />,
    title: "Total Patients",
    total_num: 24908
  },
  {
    id: 2,
    icon: <FaStethoscope />,
    title: "Total Doctors",
    total_num: 5408
  },
  {
    id: 3,
    icon: <FaBriefcaseMedical />,
    title: "Total Staff",
    total_num: 1420
  }
];

const staff = staff_info.map((info) => (
  <li key={info.id} className="staff_info_list">
    <span>{info.icon}</span>
    <div>
      <span>{info.title}</span>
      <span>{info.total_num}</span>
    </div>
  </li>
));

export const STAFF_INFO = () => {
  return <ul className="staff_info_wrapper">{staff}</ul>;
};
