from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from mlcv_app.routers import api_router

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5173",
]

servers = [
        {"url": "http://localhost:8000", "description": "Staging environment"},
        {"url": "https://prod.example.com", "description": "Production environment"},
    ]


tags_metadata = [
    {
        "name": "user",
        "description": "Operations to add new users",
    },
]

app = FastAPI(
    title="Computer vision Application",
    version="1.0.0",
    summary="Computer vision API",
    openapi_tags=tags_metadata,
    # openapi_url=None, # disable docs
    servers=servers,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent
IMAGES_DIR = BASE_DIR / "images"

app.mount("/images", StaticFiles(directory=IMAGES_DIR), name="images")

app.include_router(api_router)
  