from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session

from models import CompanyModel
from schemas import CompanySchema
from database import get_db

router = APIRouter(
  prefix='/companies',
  tags=['Companies']
)

@router.get('/')
def get_companies(db: Session = Depends(get_db)):
  companies = db.query(CompanyModel).all()
  return [CompanySchema.model_validate(company, from_attributes=True) for company in companies]


@router.get('/{id}', response_model=CompanySchema)
def get_company(id: int, db: Session = Depends(get_db)):
  company = db.query(CompanyModel).filter(CompanyModel.company_id == id).first()
  return CompanySchema.model_validate(company, from_attributes=True)