import './VideoStream.css';

export function VideoStream({ status }) {
  return (
    <div className="video-stream">
      <p className="video-stream-status">
        Status connection: <span className={`status ${status}`}>{status}</span>
      </p>
    </div>
  );
}