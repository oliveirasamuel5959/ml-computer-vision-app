import { useState } from "react";
import './App.css'
import { AddVideoStreamModal } from "./components/AddVideoStreamModal";
import { VideoStream } from "./components/VideoStream";
import SidebarLayout from "./components/Sidebar";
import plusIcon from "./assets/add.png";

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleCreateStream = (data: {
    name: string;
    streamType: string;
    rtspUrl: string;
    workflowId: string;
  }) => {

    setLoading(true);
    setStatus("connecting");

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
            <>
              <VideoStream 
                status={status}
              />
            </>
          )
        }
    </SidebarLayout>
    </div>
  );
};

export default App;
