import { Link } from "react-router";
import openStreamIcon from '../../assets/images/icons/openStream.png'
import errorStreamIcon from '../../assets/images/icons/error.png';

export function StreamStatusTable({ cameraBackend }) {
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
          {cameraBackend && (
            <tr
              key={cameraBackend.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-3 text-sm text-gray-800">
                {cameraBackend.name}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full
                    ${
                      cameraBackend.status === 'running'
                        ? 'bg-green-100 text-green-700'
                        : cameraBackend.status === 'connecting'
                        ? 'bg-yellow-100 text-yellow-700'
                        : cameraBackend.status === 'error'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {cameraBackend.status}
                </span>
                {
                  cameraBackend.status === 'running' ? (
                    <Link to={`/streams/live/${cameraBackend.id}`} className="ml-2 cursor-pointer inline-block">
                      <img
                        src={openStreamIcon}
                        alt="Open stream"
                        className="h-5 w-5 object-cover"
                      />
                    </Link>
                  ) : cameraBackend.status == 'error' ? (
                    <button className="ml-2px  border-none bg-transparent">
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
                {cameraBackend.streamStatus}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {cameraBackend.sourceType}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {cameraBackend.streamUrl}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {cameraBackend.fps ?? '—'}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {cameraBackend.resolution ?? '—'}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {cameraBackend.lastFrameAt
                  ? new Date(cameraBackend.lastFrameAt).toLocaleTimeString()
                  : '—'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
