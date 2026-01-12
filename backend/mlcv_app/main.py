from fastapi import FastAPI
from mlcv_app.routers import api_router


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

app.include_router(api_router)
  