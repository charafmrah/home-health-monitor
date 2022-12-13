"use client";

import { useEffect } from "react";
import { Chart } from "react-google-charts";

const data = [["Time", "Temperature"]];

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

const TemperatureLineChart = ({ temperatureData }) => {
  useEffect(() => {}, [temperatureData]);

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
