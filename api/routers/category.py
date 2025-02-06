from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session

from ..models import CategoryModel
from ..schemas import CreateCategorySchema
from ..database import get_db

router = APIRouter(
  prefix='/api/categories',
  tags=['Categories']
)


@router.get('/')
def get_categories(db: Session = Depends(get_db)):
  categories = db.query(CategoryModel).all()
  return categories


@router.get('/{id}')
def get_category(id:int, db: Session = Depends(get_db)):
  category = db.query(CategoryModel).filter(CategoryModel.category_id == id).first()
  if not category:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A category with this id doesn't exist!")
  
  return {
    'category': category
  }


@router.post('/')
def create_category(category: CreateCategorySchema, db: Session = Depends(get_db)):
  existing_category = db.query(CategoryModel).filter(CategoryModel.category_name == category.category_name).first()
  if existing_category:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="A category with this name already exists.")
  
  new_category = CategoryModel(category_name=category.category_name)
  db.add(new_category)
  db.commit()
  db.refresh(new_category)
  
  return new_category


@router.put('/{id}')
def update_category(id: int, category: CreateCategorySchema, db: Session = Depends(get_db)):
  u_category = db.query(CategoryModel).filter(CategoryModel.category_id == id).first()
  if not u_category:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A category with this id doesn't exist!")
  
  u_category.category_name = category.category_name
  db.commit()
  
  return {
    'message': 'Category updated succesfully!'
  }


@router.delete('/{id}')
def delete_category(id: int, db: Session = Depends(get_db)):
  category = db.query(CategoryModel).filter(CategoryModel.category_id == id).first()
  if not category:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A vacancy with this id doesn't exist!")

  db.delete(category)
  db.commit()
  return {
    'message': 'Category deleted succesfully!'
  }