from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from mlcv_app.data.products import products
from mlcv_app.schemas.stream import StreamIn, StreamOut
from mlcv_app.core.database import get_db as get_session
from mlcv_app.models.stream import Stream as StreamModel

router = APIRouter()

@router.get(
  '/',
  summary='Get stream from database',
  status_code=status.HTTP_200_OK,
  response_model=List[StreamOut],
)
async def get_streams(db: Session = Depends(get_session)):
  streams = db.query(StreamModel).order_by(StreamModel.id.desc()).all()
  return streams 

@router.post(
  '/',
  summary='Create a new video stream',
  status_code=status.HTTP_201_CREATED,
)
async def create_video_stream(
    stream_data: StreamIn,
    db: Session = Depends(get_session),
):
    
    print("Stream data: ", stream_data)

    stream_model = StreamModel(
        name=stream_data.name,
        stream_type=stream_data.streamType,
        source_type="rtsp",
        stream_url=stream_data.streamUrl,
        fps=30,
        resolution="400x1080",
        status="running",
        workflow_id=stream_data.workflowId,
    )

    db.add(stream_model)
    db.commit()
    db.refresh(stream_model)

    return stream_model
