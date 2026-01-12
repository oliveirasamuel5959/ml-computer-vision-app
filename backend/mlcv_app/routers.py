from fastapi import APIRouter
from mlcv_app.api.routers.users import router as user


api_router = APIRouter()
api_router.include_router(user, prefix='/users', tags=['user'])
