import { Device } from './types';

function DeviceCard(props: Device) {
    const statusMessage =
        props.status === "online"
            ? "✅ Online"
            : props.status === "offline"
            ? "❌ Offline"
            : "🤷 Unknown";
    return (
        <div>
            <h3>{props.name}</h3>
            <p>IP: {props.ip}</p>
            <p>Status: {statusMessage}</p>
        </div>
    );
};

export default DeviceCard;