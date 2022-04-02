import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FaBlackTie, FaRegIdBadge } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      title: {},
      position: "top" as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10
      }
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "Positive Covid",
      data: [20, 44, 46, 72, 58, 38, 60, 54, 55, 82, 62, 34],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderWidth: 0.5,
      tension: 0.4
    },
    {
      label: "Recovered ",
      data: [0, 18, 28, 42, 30, 18, 14, 12, 16, 20, 12, 8],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: 0.5,
      tension: 0.4
    }
  ]
};

export const PATIENT_STATS = () => {
  return (
    <div className="patient_stats_wrapper">
      <div>
        <span>Patients Covid Statistics</span>
        <div>
          <a href="/#">Month</a>
          <a href="/#">Weekly</a>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
