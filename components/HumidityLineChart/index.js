"use client";

import { Chart } from "react-google-charts";

const data = [
  ["Time", "Humidity"],
  [new Date("Dec 5, 2022"), 67],
  [new Date("Dec 6, 2022"), 65],
  [new Date("Dec 7, 2022"), 57],
];

const options = {
  backgroundColor: "transparent",

  colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],

  hAxis: {
    textStyle: { color: "#FFF" },
  },
  vAxis: {
    title: "Humidity (%)",
    titleTextStyle: { color: "#FFF" },
    textStyle: { color: "#FFF" },
    minValue: 0,
  },
  legend: {
    textStyle: { color: "#FFF" },
    position: "bottom",
  },
  curveType: "function",
  is3D: true,
};

const HumidityLineChart = () => {
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

export default HumidityLineChart;
