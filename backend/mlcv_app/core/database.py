from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from mlcv_app.core.config import settings
from typing import Generator

engine = create_engine(
    settings.database_url,
    pool_pre_ping=True,
)

SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
)

def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
