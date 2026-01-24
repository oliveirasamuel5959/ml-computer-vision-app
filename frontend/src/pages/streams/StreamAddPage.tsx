import axios from 'axios';
import { useState, useEffect } from 'react';
import { AddVideoStreamModal } from "./AddVideoStreamModal";
import { StreamStatusTable } from "./StreamStatusTable";
import { Sidebar } from '../../components/Sidebar';
import plusIcon from "../../assets/images/icons/add.png";

export function StreamAddPage() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [streams, setStreams] = useState([{}]);
  const [notification, setNotification] = useState({ show: false, message: "", success: false });
  // const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchStreamData = async () => {
      try {
        const response = await axios.get('/api/streams');
        console.log('Stream status response:', response.data);

        setStreams(response.data);

        if (response.data.length > 0) {
          setLoading(true);
        }

      } catch (error) {
        console.error('Failed to fetch streams:', error);
        setStreams([]);
      }
    };

    fetchStreamData();
  }, []);


  const now = new Date();

  const handleCreateStream = (data: {
    name: string;
    streamType: string;
    rtspUrl: string;
    workflowId: string;
  }) => {
    setIsModalOpen(false);
  };

  const handleNotification = (message: string, success: boolean) => {
    setNotification({ show: true, message, success });
    if (!success) {
      setLoading(false);
    }
    setTimeout(() => {
      setNotification({ show: false, message: "", success: false });
    }, 3000);
  };

  return (

    <>
      <title>Add Stream</title>
      <link rel="icon" type="image/png" href="stream-favicon.png" />

      <div className="root-container">
        <Sidebar>
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
                  onNotification={handleNotification}
                />
              </>
            )
          }
          {
            isLoading && (
              <div>
                <StreamStatusTable
                  streams={streams}
                />
              </div>
            )
          }
        </Sidebar>
      </div>

      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-opacity duration-300 ${notification.success ? "bg-green-500" : "bg-red-500"
            }`}
        >
          {notification.message}
        </div>
      )}
    </>
  );
}