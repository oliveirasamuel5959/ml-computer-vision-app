import openStreamIcon from '../assets/openStream.png';
import errorStreamIcon from '../assets/error.png';

export function CameraRunningStatus({ cameraBackend }) {
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
          {cameraBackend.map((stream) => (
            <tr
              key={stream.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 text-sm text-gray-800">
                {stream.name}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full
                    ${
                      stream.status === 'running'
                        ? 'bg-green-100 text-green-700'
                        : stream.status === 'connecting'
                        ? 'bg-yellow-100 text-yellow-700'
                        : stream.status === 'error'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {stream.status}
                </span>
                {
                  stream.status === 'running' ? (
                    <button className="m-5 cursor-pointer border-none bg-transparent">
                      <img
                        src={openStreamIcon}
                        alt="Open stream"
                        className="h-5 w-5 object-cover"
                      />
                    </button>
                  ) : stream.status == 'error' ? (
                    <button className="m-5 border-none bg-transparent">
                      <img
                        src={errorStreamIcon}
                        alt="Camera error"
                        className="h-5 w-5 object-cover"
                      />
                    </button>
                  ) : null
                }
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.streamStatus}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.sourceType}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.streamUrl}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.fps ?? '—'}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.resolution ?? '—'}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.lastFrameAt
                  ? new Date(stream.lastFrameAt).toLocaleTimeString()
                  : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
