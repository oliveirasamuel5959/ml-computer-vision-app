import { useState } from "react";
import './App.css'
import { AddVideoStreamModal } from "./components/AddVideoStreamModal";
import { VideoStream } from "./components/VideoStream";
import SidebarLayout from "./components/Sidebar";

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
        <h1>Video Streams</h1>

        {
          !isLoading && (
            <>
              <button onClick={() => setIsModalOpen(true)}>
                Add New Stream
              </button>

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
