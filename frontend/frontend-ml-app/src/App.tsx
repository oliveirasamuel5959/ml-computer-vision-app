import { useState } from "react";
import './App.css'
import { AddVideoStreamModal } from "./components/AddVideoStreamModal";
import SidebarLayout from "./components/Sidebar";
import plusIcon from "./assets/add.png";
import { CameraRunningStatus } from "./components/CameraRunningStatus";

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [cameraBackend, setCameraBackend] = useState([{}]);
  const [error, setError] = useState<boolean>(false);

  const now = new Date();

  const handleCreateStream = (data: {
    name: string;
    streamType: string;
    rtspUrl: string;
    workflowId: string;
  }) => {

    setLoading(true);

    setCameraBackend([
    {
      id: 1,
      name: 'CV Car Parking',
      status: "running",
      streamStatus: "connected",
      sourceType: "rtsp",
      streamUrl: "rtsp://...",
      fps: 30,
      resolution: '1920x1080',
      lastFrameAt: now
    }, {
      id: 1,
      name: 'CV Robot Area',
      status: "connecting",
      streamStatus: "stopped",
      sourceType: "rtsp",
      streamUrl: "rtsp://...",
      fps: 22,
      resolution: '1920x1080',
      lastFrameAt: now
    }
  ]);

    console.log("Creating stream:", data);

    // Example: send to backend
    // fetch("/api/streams", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    setIsModalOpen(false);
  };

  return (
    <div className="root-container">
      <SidebarLayout>
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Video Streams
        </h1>

        {
          !isLoading && (
            <>
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-5 text-white p-2 flex items-center justify-center cursor-pointer"
                >
                  <img src={plusIcon} alt="Add" className="w-20 h-20" />
                </button>
              </div>

              <AddVideoStreamModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateStream}
              />
            </>
          )
        }
        {
          isLoading && (
            <div>
              <CameraRunningStatus
                cameraBackend={cameraBackend}
              />
            </div>
          )
        }
    </SidebarLayout>
    </div>
  );
};

export default App;
