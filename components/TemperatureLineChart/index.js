"use client";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TemperatureLineChart = ({ temperatureData }) => {
  const [options, setOptions] = useState({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dynamicAnimation: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Temperature over time",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      title: {
        text: "Temperature °C",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
    },
  });
  const [series, useSeries] = useState([
    {
      name: "Temperature",
      data: temperatureData,
    },
  ]);
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      width="1000"
      height="300"
    />
  );
};

export default TemperatureLineChart;
