import { ReactNode } from "react";
import {
  FaUserFriends,
  FaThermometerEmpty,
  FaPoll,
  FaEnvelope,
  FaDiceD6,
  FaBorderAll,
  FaClipboard,
  FaRegDotCircle
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

interface list_if {
  id: number;
  icon: ReactNode;
  title: string;
}

const managements_list: list_if[] = [
  {
    id: 1,
    icon: <FaBorderAll />,
    title: "Overview"
  },
  {
    id: 2,
    icon: <FaPoll />,
    title: "Statistics"
  },
  {
    id: 3,
    icon: <FaThermometerEmpty />,
    title: "Patients"
  },
  {
    id: 4,
    icon: <FaClipboard />,
    title: "PolyClinic"
  },
  {
    id: 5,
    icon: <FaUserFriends />,
    title: "Doctors"
  },
  {
    id: 6,
    icon: <FaDiceD6 />,
    title: "Medicines"
  }
];

const support_list: list_if[] = [
  {
    id: 1,
    icon: <FaEnvelope />,
    title: "Message"
  },
  {
    id: 2,
    icon: <FiSettings />,
    title: "Settings"
  }
];

const management = managements_list.map((item) => (
  <li key={item.id}>
    <span> {item.icon} </span>
    <span> {item.title} </span>
  </li>
));

const support = support_list.map((item) => (
  <li key={item.id}>
    <span> {item.icon} </span>
    <span> {item.title} </span>
  </li>
));

export const LEFT_SIDEBAR = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_heading">
        <span>
          {" "}
          <FaRegDotCircle />{" "}
        </span>
        <span> Poli Clinic </span>
      </div>
      <div className="sidebar_management">
        <h2> Managements </h2>
        <ul> {management}</ul>
      </div>
      <div>
        <h2> support </h2>
        <ul> {support} </ul>
      </div>
      <div>
        <h2> Covid Informations </h2>
      </div>
    </div>
  );
};
