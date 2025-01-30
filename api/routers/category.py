from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session

from models import CategoryModel
from database import get_db

router = APIRouter(
  prefix='/categories',
  tags=['Categories']
)


@router.get('/')
def get_categories(db: Session = Depends(get_db)):
  categories = db.query(CategoryModel).all()
  return {
    'categories': categories
  }


@router.get('/{id}')
def get_category(id:int, db: Session = Depends(get_db)):
  category = db.query(CategoryModel).filter(CategoryModel.category_id == id).first()
  if not category:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A category with this id doesn't exist!")
  
  return {
    'category': category
  }