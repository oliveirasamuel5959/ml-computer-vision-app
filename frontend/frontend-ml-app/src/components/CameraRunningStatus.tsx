const cameraBackendInfoHeader = [
  {
    id: 'Id',
    name: 'Name',
    status: 'Status',
    streamStatus: 'Stream Status',
    sourceType: 'Source Type',
    streamUrl: 'Stream URL',
    fps: 'FPS'
  }
]

const cameraBackendInfo = [
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
    lastFrameAt: '2026-01-01T13:42:10Z', // Timestamp of last received frame
    uptimeSeconds: 8640,            // How long the camera has been running
    health: 'healthy',              // healthy | degraded | critical
    errorCode: null,                // Backend error code, if any
    errorMessage: null,             // Human-readable error message
    updatedAt: '2026-01-01T13:42:15Z' // Last status update from backend
  }
]

export function CameraRunningStatus({ status }) {
  return (
    <div className="w-full overflow-x-auto p-4">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Stream</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Source Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Stream URL</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">FPS</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Resolution</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Last Frame</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {cameraBackendInfo.map((camera) => (
            <tr
              key={camera.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 text-sm text-gray-800">
                {camera.name}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full
                    ${
                      status === 'running'
                        ? 'bg-green-100 text-green-700'
                        : status === 'connecting'
                        ? 'bg-yellow-100 text-yellow-700'
                        : status === 'error'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {status}
                </span>
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {camera.streamStatus}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {camera.sourceType}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {camera.streamUrl}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {camera.fps ?? '—'}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {camera.resolution ?? '—'}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {camera.lastFrameAt
                  ? new Date(camera.lastFrameAt).toLocaleTimeString()
                  : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
