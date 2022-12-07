"use client";

import React, { useState } from "react";

import TemperatureLineChart from "../components/TemperatureLineChart";
import HumidityLineChart from "../components/HumidityLineChart";
import PulseDot from "../components/PulseDot";

export default function HomePage() {
  const [deviceStatus, setDeviceStatus] = useState("green");
  return (
    <div>
      <h1>Home Monitor</h1>
      <PulseDot color={deviceStatus} />
      <TemperatureLineChart />
      <HumidityLineChart />
    </div>
  );
}
