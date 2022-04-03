import "./styles.css";
import {
  GENDER_PATIENT,
  LEFT_SIDEBAR,
  OVERVIEW,
  PATIENT_STATS,
  SEARCH_BAR,
  STAFF_INFO
} from "./Components/index";

export default function App() {
  return (
    <div className="container">
      <section className="left-sidebar">
        <LEFT_SIDEBAR />
      </section>
      <section className="search-bar">
        <SEARCH_BAR />
      </section>
      <section className="overview">
        <OVERVIEW />
      </section>
      <section className="staff_info">
        <STAFF_INFO />
      </section>
      <section className="patient_covid_stats">
        <PATIENT_STATS />
      </section>
      <section className="gender_patient">
        <GENDER_PATIENT />
      </section>
      <section className="group_patient">
        <GENDER_PATIENT />
      </section>
      <section className="informations"></section>
      <section className="poly_division"></section>
    </div>
  );
}
