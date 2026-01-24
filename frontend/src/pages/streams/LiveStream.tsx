import { useParams } from "react-router";
import { Sidebar } from "../../components/Sidebar";

export function LiveStream() {
  const { streamId } = useParams();

  return (
    <Sidebar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-5xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Live Stream
          </h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-black aspect-video flex items-center justify-center">
              <img
                src={`/api/streams/live`}
                alt="Live Stream"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow p-4">
            <p className="text-gray-700">
              <span className="font-semibold">Stream ID:</span> {streamId}
            </p>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}