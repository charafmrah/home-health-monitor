"use client";

import Chart from "react-apexcharts";

const options = {
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
    text: "Humidity over time",
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
      text: "Humidity %",
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
  },
};

const HumidityLineChart = ({ humidityData }) => {
  const series = [
    {
      name: "Humidity",
      data: humidityData,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      width="1000"
      height="300"
    />
  );
};

export default HumidityLineChart;
