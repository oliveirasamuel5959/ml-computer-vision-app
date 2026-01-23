import os

import dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from mlcv_app.core.config import settings
from mlcv_app.core.base import Base

dotenv.load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
print("Database URL:", DATABASE_URL.replace("postgresql://", "postgresql+psycopg://"))

engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
)

if __name__ == "__main__":
    with engine.connect() as conn:
        result = conn.execute("select 'hello world'")
        print(result.fetchall())

