import cv2
import threading

class CameraManager:
  def __init__(self, stream_data):
    self.cap = cv2.VideoCapture(int(stream_data.stream_url))
    self.lock = threading.Lock()

    if not self.cap.isOpened():
        raise RuntimeError("Could not open camera")

  def generate(self):
    while True:
      with self.lock:
        success, frame = self.cap.read()

      if not success:
        break

      ret, buffer = cv2.imencode(".jpg", frame)
      
      if not ret:
          continue

      frame_bytes = buffer.tobytes()

      yield (
          b"--frame\r\n"
          b"Content-Type: image/jpeg\r\n\r\n"
          + frame_bytes
          + b"\r\n"
      )
