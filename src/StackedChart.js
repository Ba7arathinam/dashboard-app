import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" 
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Total Win",
      data: [30, 150, 20, 150, 130, 25, 150, 30],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      lineTension: 0.2
    },
    {
      fill: true,
      label: "Total Win",
      data: [150, 20, 150, 45, 160, 10, 150],
      borderColor: "#5e43b0",
      backgroundColor: "rgba(94,67,176,0.5)",
      lineTension: 0.2
    }
  ]
};

export function StackedChart() {
  return <Line options={options} data={data} />;
}