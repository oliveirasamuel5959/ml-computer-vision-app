from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
)
from sqlalchemy.sql import func
from mlcv_app.core.base import Base

class Stream(Base):
    __tablename__ = "streams"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(255), nullable=False)

    stream_type = Column(String(50), nullable=False)
    source_type = Column(String(50), nullable=False)

    stream_url = Column(String(2048), nullable=False)

    fps = Column(Integer, nullable=False, default=0)
    resolution = Column(String(50), nullable=False, default="unknown")

    last_frame_at = Column(DateTime(timezone=True), nullable=True)

    workflow_id = Column(String(255), nullable=True)

    status = Column(String(50), nullable=False, default="inactive")

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )
