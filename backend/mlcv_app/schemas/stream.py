from pydantic import BaseModel
from typing import Optional


class StreamCreate(BaseModel):
    """Schema for creating a new video stream"""
    name: str
    streamType: str
    rtspUrl: str
    workflowId: Optional[str] = None


class Stream(StreamCreate):
    """Schema for a video stream with ID and status"""
    id: int
    status: str = "inactive"

    class Config:
        from_attributes = True
