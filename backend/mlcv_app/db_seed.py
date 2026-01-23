from mlcv_app.core.database import SessionLocal
from mlcv_app.models.stream import Stream

def seed_data():
    db = SessionLocal()

    try:
        data = [
            Stream(
                name="Stream 1",
                stream_type="video",
                source_type="rtsp",
                stream_url="rtsp://localhost:8554/stream1",
                fps=30,
                resolution="1920x1080",
                status="inactive",
                workflow_id=None,
                last_frame_at=None,
            ),
            Stream(
                name="Stream 2",
                stream_type="video",
                source_type="file",
                stream_url="/data/videos/sample.mp4",
                fps=25,
                resolution="1280x720",
                status="inactive",
                workflow_id=None,
                last_frame_at=None,
            ),
        ]

        db.add_all(data)
        db.commit()
        print("Data seeded successfully.")

    except Exception as e:
        db.rollback()
        raise e

    finally:
        db.close()

if __name__ == "__main__":
    seed_data()
