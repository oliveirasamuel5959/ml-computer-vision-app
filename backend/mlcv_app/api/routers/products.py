from fastapi import APIRouter, Depends, HTTPException, status
from mlcv_app.data.products import products

router = APIRouter()

@router.get(
  '/',
  summary='Query all users',
  status_code=status.HTTP_200_OK,
)
async def read_products():
  return products
