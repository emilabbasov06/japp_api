from jose import JWTError, jwt
from datetime import datetime, timedelta

SECRET_KEY = 'a3f7d2e5c8b9a4e1f2d3c6b8a9e4f7d1c5e6a2b7f8d9c3a1e4b2f6d8c9a7e5f3'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict):
  to_encode = data.copy()
  expire = datetime.now() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  
  to_encode.update({
    'exp': expire
  })
  
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt