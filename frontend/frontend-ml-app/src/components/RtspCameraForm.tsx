import { useState } from "react";
import './RtspCameraForm.css';

export function RtspCameraForm() {

  // "rtsp://user:pass@ip:port/stream"

  const [cameraUser, setCameraUser] = useState("");
  const [cameraPassword, setCameraPassword] = useState("");
  const [cameraIP, setCameraIP] = useState("");
  const [cameraPort, setCameraPort] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const rtsp =  `rtsp://${cameraUser}:${cameraPassword}@${cameraIP}:${cameraPort}/stream`;

    console.log(rtsp);

  }

  return (
    <form onSubmit={handleSubmit} className="rtsp-form">
      <label>RTSP Camera Connection</label>

      <input
        type="text"
        placeholder="username"
        value={cameraPassword}
        onChange={(e) => setCameraPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="password"
        value={cameraUser}
        onChange={(e) => setCameraUser(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="IP Adrress"
        value={cameraIP}
        onChange={(e) => setCameraIP(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Port"
        value={cameraPort}
        onChange={(e) => setCameraPort(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Conectando..." : "Conectar"}
      </button>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

    </form>
  );
}

export default RtspCameraForm;
