"use client";

import React, { useState, useEffect } from "react";

import { fetchData } from "../utils/aws";
import TemperatureLineChart from "../components/TemperatureLineChart";
import HumidityLineChart from "../components/HumidityLineChart";
import PulseDot from "../components/PulseDot";
import Switch from "@mui/material/Switch";

export default function HomePage() {
  const [deviceStatus, setDeviceStatus] = useState("online");

  useEffect(() => {
    console.log("fetching data");
    fetchData("ESP8266_Data");
  }, []);

  function deviceStatusChange() {
    if (deviceStatus === "online") {
      setDeviceStatus("offline");
    } else {
      setDeviceStatus("online");
    }
  }
  return (
    <div className="flex flex-col items-center">
      <h1>Home Health Monitor</h1>
      <div className="flex items-center gap-2 mt-9">
        <PulseDot color={deviceStatus} />
        <p>Device {deviceStatus}</p>
        <Switch defaultChecked color="primary" onChange={deviceStatusChange} />
      </div>
      <TemperatureLineChart />
      <HumidityLineChart />
    </div>
  );
}
