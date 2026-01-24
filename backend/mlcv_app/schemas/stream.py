from pydantic import BaseModel, Field
from typing import Optional
from typing import Annotated
from datetime import datetime


class StreamIn(BaseModel):
    """Schema for creating a new video stream"""
    
    name: Annotated[str, Field(description="Name of the stream source", max_length=20, nullable=False)]
    streamType: Annotated[str, Field(description="Type of stream source", max_length=20, nullable=False)]
    streamUrl: Annotated[str, Field(description="Full URL of the stream", max_length=50, nullable=False)]
    workflowId: Annotated[str, Field(description="Workflow ID associated with the stream", max_length=20, nullable=False)]

    class Config:
        populate_by_name = True

class StreamOut(BaseModel):
    id: Annotated[int, Field(description="Unique identifier for the stream")]
    name: Annotated[str, Field(description="Name of the stream source")]
    streamType: Annotated[
        str,
        Field(
            description="Type of stream source",
            serialization_alias="streamType",
            validation_alias="stream_type",
        ),
    ]
    sourceType: Annotated[
        str,
        Field(
            description="Source type of the stream",
            serialization_alias="sourceType",
            validation_alias="source_type",
        ),
    ]
    streamUrl: Annotated[
        str,
        Field(
            description="Full URL of the stream",
            serialization_alias="streamUrl",
            validation_alias="stream_url",
        ),
    ]
    fps: Annotated[int, Field(description="Frames per second of the stream")]
    resolution: Annotated[str, Field(description="Resolution of the stream")]
    lastFrameAt: Optional[datetime] = Field(
        default=None,
        description="Timestamp of the last frame received",
        validation_alias="last_frame_at",
        serialization_alias="lastFrameAt",
    )
    workflowId: Optional[str] = Field(
        default=None,
        description="Workflow ID associated with the stream",
        validation_alias="workflow_id",
        serialization_alias="workflowId",
    )
    status: Annotated[str, Field(description="Current status of the stream")]

    model_config = {
        "from_attributes": True,
    }
