const now = new Date(); // Current date and time


export const cameraBackendInfo = [
  {
    id: '001',                 // Unique identifier (DB / backend reference)
    name: 'Camera Vision',
    status: 'running',             // running | stopped | error | initializing
    streamStatus: 'connected',     // connected | disconnected | reconnecting
    sourceType: 'rtsp',             // rtsp | usb | ip | file
    streamUrl: 'rtsp://...',        // Optional (often masked on frontend)
    fps: 30,                        // Current frames per second
    resolution: '1920x1080',        // Active resolution
    latencyMs: 120,                 // Backend-measured latency
    lastFrameAt: now, // Timestamp of last received frame
    uptimeSeconds: 8640,            // How long the camera has been running
    health: 'healthy',              // healthy | degraded | critical
    errorCode: null,                // Backend error code, if any
    errorMessage: null,             // Human-readable error message
    updatedAt: '2026-01-01T13:42:15Z' // Last status update from backend
  }
]
