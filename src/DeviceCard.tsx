interface Device {
    name: string
    ip: string
    status: "online" | "offline" | "unknown"
};

function deviceStatus(props: Device) {
    if (device.status == "online") {    
        console.log(`${device.name} is Online at ${device.ip}`);
    } else if (device.status == "offline") {
        console.log(`${device.name} is Offline`);
    } else {
        console.log(`${device.name} status is unknown :( `);
    }
};

export default DeviceCard;