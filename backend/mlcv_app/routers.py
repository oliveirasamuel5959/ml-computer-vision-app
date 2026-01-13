from fastapi import APIRouter
from mlcv_app.api.routers.products import router as product


api_router = APIRouter()
api_router.include_router(product, prefix='/products', tags=['product'])
