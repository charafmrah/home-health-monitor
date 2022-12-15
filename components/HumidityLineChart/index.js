"use client";

import { Chart } from "react-google-charts";

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

const HumidityLineChart = ({ humidityData }) => {
  return (
    <Chart
      chartType="LineChart"
      data={humidityData}
      options={options}
      width="100%"
      height="400px"
    />
  );
};

export default HumidityLineChart;
