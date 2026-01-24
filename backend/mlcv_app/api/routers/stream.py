import cv2
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from mlcv_app.schemas.stream import StreamIn, StreamOut
from mlcv_app.core.database import get_db as get_session
from mlcv_app.models.stream import Stream as StreamModel

router = APIRouter()

def generate_frames():
  cap = cv2.VideoCapture(0)

  if not cap.isOpened():
      raise RuntimeError("Could not open webcam")

  while True:
    success, frame = cap.read()
    if not success:
        break

    # Encode frame as JPEG
    ret, buffer = cv2.imencode(".jpg", frame)
    frame_bytes = buffer.tobytes()

    yield (
        b"--frame\r\n"
        b"Content-Type: image/jpeg\r\n\r\n"
        + frame_bytes
        + b"\r\n"
    )
    
@router.get("/live")
def live_stream():
  return StreamingResponse(
    generate_frames(),
    media_type="multipart/x-mixed-replace; boundary=frame"
  )

@router.get(
  '/',
  summary='Get stream from database',
  status_code=status.HTTP_200_OK,
  response_model=List[StreamOut],
)
async def get_streams(db: Session = Depends(get_session)):
  streams = db.query(StreamModel).order_by(StreamModel.id.desc()).all()
  print("Fetched streams: ", streams)
  return streams 

@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    response_model=StreamOut,
)
async def create_video_stream(stream_data: StreamIn, db: Session = Depends(get_session)):
  
    print("Received stream data: ", stream_data)
  
    stream_model = StreamModel(
        name=stream_data.name,
        stream_type=stream_data.streamType,
        stream_url=stream_data.streamUrl,
        workflow_id=stream_data.workflowId,
        source_type="rtsp",
        fps=30,
        resolution="1920x1080",
        status="running",
    )

    db.add(stream_model)
    db.commit()
    db.refresh(stream_model)

    return stream_model

