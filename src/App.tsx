import "./styles.css";
import { LEFT_SIDEBAR } from "./Components/index";
import { SEARCH_BAR } from "./Components/index";

export default function App() {
  return (
    <div className="container">
      <section className="left-sidebar">
        <LEFT_SIDEBAR />
      </section>
      <section className="search-bar">
        <SEARCH_BAR />
      </section>
      <section className="overview"></section>
      <section className="staff_info"></section>
      <section className="patient_covid_stats"></section>
      <section className="gender_patient"></section>
      <section className="group_patient"></section>
      <section className="informations"></section>
      <section className="poly_division"></section>
    </div>
  );
}
