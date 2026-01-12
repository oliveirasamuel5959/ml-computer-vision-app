from fastapi import APIRouter, Depends, HTTPException, status

router = APIRouter()

@router.get(
  '/',
  summary='Query all users',
  status_code=status.HTTP_200_OK,
)
async def read_users():
  return [{"username": "Rick"}, {"username": "Morty"}]
