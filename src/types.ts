export interface Device {
    name: string
    ip: string
    status: "online" | "offline" | "unknown"
};
