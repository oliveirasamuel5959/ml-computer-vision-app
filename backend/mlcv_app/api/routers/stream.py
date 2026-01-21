from fastapi import APIRouter, Depends, HTTPException, status
from mlcv_app.data.products import products
from mlcv_app.schemas.stream import StreamCreate, Stream

router = APIRouter()

@router.get(
  '/',
  summary='Query all users',
  status_code=status.HTTP_200_OK,
)
async def read_products():
  return products

@router.post(
  '/',
  summary='Create a new video stream',
  status_code=status.HTTP_201_CREATED,
  response_model=Stream
)
async def create_video_stream(stream_data: StreamCreate):
  # Here you would add logic to create and store the new video stream
  new_stream = {
    "id": 1,
    "name": stream_data.name,
    "streamType": stream_data.streamType,
    "sourceType": "rtsp",
    "streamUrl": stream_data.streamUrl,
    "fps": 30,
    "resolution": '1920x1080',
    "lastFrameAt": "now",
    "workflowId": stream_data.workflowId,
    "status": "running"
  }

  return new_stream
