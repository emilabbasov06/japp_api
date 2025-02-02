from .. import oauth2
from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from models import CompanyModel
from database import get_db
from utils import verify

router = APIRouter(
  tags=['Authentication']
)


@router.post('/login')
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
  user = db.query(CompanyModel).filter(CompanyModel.company_email == user_credentials.username).first()
  if not user:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Invalid credentials!')
  
  if not verify(user_credentials.password, user.company_password):
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Invalid credentials!')
  
  access_token = oauth2.create_access_token(data={
    'company_id': user.company_id
  })
  return {'access_token': access_token, 'token_type': 'bearer'}