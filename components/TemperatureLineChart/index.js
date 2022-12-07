"use client";

import { Chart } from "react-google-charts";

const data = [
  ["Time", "Temperature"],
  [new Date("Dec 5, 2022"), 20],
  [new Date("Dec 6, 2022"), 22],
  [new Date("Dec 7, 2022"), 21],
];

const options = {
  backgroundColor: "transparent",

  colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],

  hAxis: {
    textStyle: { color: "#FFF" },
  },
  vAxis: {
    title: "Temperature (C)",
    titleTextStyle: { color: "#FFF" },
    textStyle: { color: "#FFF" },
    minValue: -10,
  },
  legend: {
    textStyle: { color: "#FFF" },
    position: "bottom",
  },
  curveType: "function",
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
