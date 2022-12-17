import PulseDot from "../PulseDot";
import Switch from "@mui/material/Switch";

const DeviceControl = ({ deviceStatus, deviceStatusChange }) => {
  return (
    <div className="flex items-center gap-2 mb-10">
      <PulseDot color={deviceStatus} />
      <p>Device {deviceStatus}</p>
      <Switch defaultChecked color="primary" onChange={deviceStatusChange} />
    </div>
  );
};

export default DeviceControl;
