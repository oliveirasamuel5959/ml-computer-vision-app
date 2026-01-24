import { Link } from "react-router";
import openStreamIcon from '../../assets/images/icons/openStream.png'
import errorStreamIcon from '../../assets/images/icons/error.png';

export function StreamStatusTable({ streams }) {

  console.log("Rendering streamstatusTable with data:", streams);
  
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
          {streams?.map((stream) => (
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

                {stream.status === 'running' && (
                  <Link
                    to={`/streams/live/${stream.id}`}
                    className="ml-2 inline-block"
                  >
                    <img
                      src={openStreamIcon}
                      alt="Open stream"
                      className="h-5 w-5"
                    />
                  </Link>
                )}

                {stream.status === 'error' && (
                  <img
                    src={errorStreamIcon}
                    alt="Camera error"
                    className="ml-2 h-5 w-5"
                  />
                )}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {stream.streamType}
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
