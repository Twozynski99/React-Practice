import { Device } from './types';
import DeviceList from'./DeviceList';

const devices: Device[] = [
  { name: "Home PC", ip: "192.168.1.1", status: "online" },
  { name: "Router", ip: "192.168.1.4", status: "online" },
  { name: "Brother Printer", ip: "192.168.1.19", status: "online" },
  { name: "iOS Device", ip: "192.168.1.32", status: "offline" },
  { name: "Old Printer", ip: "192.168.1.19", status: "unknown" },
  { name: "NAS", ip: "192.168.1.73", status: "online" },
];

function App() {
  return (
    <div>
      <h1>Network Device Monitor</h1>
      <DeviceList devices={devices} />
    </div>
  );
}

export default App;