import { Device } from './types';
import DeviceCard from './DeviceCard';

interface DeviceListProps {
    devices: Device[];
}

function DeviceList({ devices }: DeviceListProps) {
    return (
        <div>
            <h2>Device List</h2>
            {devices.map((device) => (
                <DeviceCard
                    key={device.ip}
                    name={device.name}
                    ip={device.ip}
                    status={device.status}
                />
            ))}
        </div>
    );
};

export default DeviceList;