"use client";

import React, { useState, useEffect } from "react";

import TemperatureLineChart from "../components/TemperatureLineChart";
import HumidityLineChart from "../components/HumidityLineChart";
import PulseDot from "../components/PulseDot";
import Switch from "@mui/material/Switch";
import { Amplify, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub";

export default function HomePage() {
  const [deviceStatus, setDeviceStatus] = useState("online");
  const [temperatureData, setTemperatureData] = useState<any[]>([
    ["Time", "Temperature"],
  ]);
  const [humidityData, setHumidityData] = useState<any[]>([
    ["Time", "Humidity"],
  ]);

  function deviceStatusChange() {
    if (deviceStatus === "online") {
      setDeviceStatus("offline");
      PubSub.publish("esp8266/sub", {
        action: "off",
      }).catch((err) => console.log(err));
    } else {
      setDeviceStatus("online");
      PubSub.publish("esp8266/sub", {
        action: "on",
      }).catch((err) => console.log(err));
    }
  }

  function cropData(data: any[]) {
    if (data.length > 60) {
      data.shift();
    }
  }

  useEffect(() => {
    const amplifyConfig = {
      Auth: {
        identityPoolId: process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID,
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
        userPoolWebClientId:
          process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
      },
    };

    const awsIotConfig = new AWSIoTProvider({
      aws_pubsub_region: process.env.NEXT_PUBLIC_AWS_REGION,
      aws_pubsub_endpoint: `wss://${process.env.NEXT_PUBLIC_MQTT_ID}.iot.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/mqtt`,
    });

    Amplify.configure(amplifyConfig);
    Amplify.addPluggable(awsIotConfig);

    PubSub.subscribe("esp8266/pub").subscribe({
      next: (data: any) => {
        console.log("Message received", data);

        cropData(temperatureData);
        cropData(humidityData);

        setTemperatureData((oldTemperatureData) => [
          ...oldTemperatureData,
          [new Date(data.value.time), data.value.temperature],
        ]);
        setHumidityData((oldHumidityData) => [
          ...oldHumidityData,
          [new Date(data.value.time), data.value.humidity],
        ]);
      },
      error: (error: any) => console.error(error),
      complete: () => console.log("Done"),
    });
  });

  return (
    <div className="flex flex-col items-center">
      <h1>Home Health Monitor</h1>
      <div className="flex items-center gap-2 mt-9">
        <PulseDot color={deviceStatus} />
        <p>Device {deviceStatus}</p>
        <Switch defaultChecked color="primary" onChange={deviceStatusChange} />
      </div>
      {temperatureData.length > 1 && (
        <TemperatureLineChart temperatureData={temperatureData} />
      )}
      {humidityData.length > 1 && (
        <HumidityLineChart humidityData={humidityData} />
      )}
    </div>
  );
}
