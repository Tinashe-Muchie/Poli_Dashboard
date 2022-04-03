import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BiDotsHorizontalRounded } from "react-icons/bi";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Elderly", "Adult", "Child"],
  datasets: [
    {
      label: "Patients",
      data: [38, 36, 26],
      backgroundColor: [
        "rgba(205, 209, 228)",
        "rgba(15, 10, 222)",
        "rgba(53, 162, 235)"
      ],
      borderColor: [
        "rgba(205, 209, 228)",
        "rgba(15, 10, 222)",
        "rgba(53, 162, 235)"
      ],
      borderWidth: 1
    }
  ]
};

export const options = {
  cutout: 50,
  plugins: {
    legend: {
      title: {},
      position: "bottom" as const,
      align: "center" as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10
      }
    }
  }
};

export const GROUP_PATIENT = () => {
  return (
    <div className="patients_wrapper">
      <div>
        <span>Top Patient by Group</span>
        <span>
          <BiDotsHorizontalRounded />
        </span>
      </div>
      <div>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};
