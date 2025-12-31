import { useState } from "react";
import './App.css'
import { AddVideoStreamModal } from "./components/AddVideoStreamModal";

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCreateStream = (data: {
    name: string;
    streamType: string;
    rtspUrl: string;
    workflowId: string;
  }) => {
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
    <div style={{ padding: "20px" }} className="root-container">
      <h1>Video Streams</h1>

      <button onClick={() => setIsModalOpen(true)}>
        Add New Stream
      </button>

      <AddVideoStreamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateStream}
      />
    </div>
  );
};

export default App;
