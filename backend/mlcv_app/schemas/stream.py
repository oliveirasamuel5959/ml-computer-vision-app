from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class StreamCreate(BaseModel):
    """Schema for creating a new video stream"""
    name: str
    streamType: str
    streamUrl: str
    workflowId: Optional[str] = None

    class Config:
        populate_by_name = True

class Stream(BaseModel):
    """Schema for a video stream with all details"""
    id: int
    name: str
    streamType: str
    sourceType: str
    streamUrl: str
    fps: int
    resolution: str
    lastFrameAt: Optional[str] = None
    workflowId: Optional[str] = None
    status: str

    class Config:
        from_attributes = True
