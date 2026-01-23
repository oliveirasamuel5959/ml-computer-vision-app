from mlcv_app.core.database import SessionLocal
from mlcv_app.models.stream import Stream

def seed_data():
  db = SessionLocal()

  data = [
    Stream(name="Stream 1"),
    Stream(name="Stream 2"),
  ]

  db.add_all(data)
  db.commit()

  print("Data seeded successfully.")

if __name__ == "__main__":
    seed_data()