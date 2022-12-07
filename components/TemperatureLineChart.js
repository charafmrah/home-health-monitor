"use client";

import { Chart } from "react-google-charts";

const data = [
  ["Time", "Value"],
  [12, 30],
  [13, 22],
  [14, 20],
];

const options = {
  backgroundColor: "transparent",
  colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],

  hAxis: {
    textStyle: { color: "#FFF" },
  },
  vAxis: {
    textStyle: { color: "#FFF" },
  },
  legend: {
    textStyle: { color: "#FFF" },
  },
  is3D: true,
};

const TemperatureLineChart = () => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
  );
};

export default TemperatureLineChart;
