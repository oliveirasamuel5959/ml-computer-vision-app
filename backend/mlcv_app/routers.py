from fastapi import APIRouter
from mlcv_app.api.routers.stream import router as stream


api_router = APIRouter()
api_router.include_router(stream, prefix='/stream', tags=['stream'])