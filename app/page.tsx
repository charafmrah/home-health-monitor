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
  const [data, setData] = useState(null);

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
      aws_pubsub_region: process.env.NEXT_PUBLIC_NEXT_REGION,
      aws_pubsub_endpoint: `wss://${process.env.NEXT_PUBLIC_NEXT_MQTT_ID}.iot.${process.env.REACT_APP_REGION}.amazonaws.com/mqtt`,
    });

    Amplify.configure(amplifyConfig);
    Amplify.addPluggable(awsIotConfig);

    console.log("hello");
    const pubsub = PubSub.subscribe("esp8266/pub").subscribe({
      next: (data: any) => {
        console.log("hello");
        console.log("Message received", data);
        setData(data.value);
      },
      error: (error: any) => console.error(error),
      complete: () => console.log("Done"),
    });

    return function cleanup() {
      pubsub.unsubscribe();
    };
  });

  return (
    <div className="flex flex-col items-center">
      <h1>Home Health Monitor</h1>
      <div className="flex items-center gap-2 mt-9">
        <PulseDot color={deviceStatus} />
        <p>Device {deviceStatus}</p>
        <Switch defaultChecked color="primary" />
      </div>
      {data}
      <TemperatureLineChart />
      <HumidityLineChart />
    </div>
  );
}
