from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session

from models import CompanyModel
from schemas import CompanySchema, CreateCompanySchema
from database import get_db
from utils import hash

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
  if not company:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A company with this id doesn't exist!")
  
  return CompanySchema.model_validate(company, from_attributes=True)


@router.post('/', response_model=CompanySchema, status_code=status.HTTP_201_CREATED)
def create_company(company: CreateCompanySchema, db: Session = Depends(get_db)):
  hashed_password = hash(company.company_password)
  company.company_password = hashed_password
  
  existing_company = db.query(CompanyModel).filter(CompanyModel.company_email == company.company_email).first()
  if existing_company:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="A company with this email already exists.")

  new_company = CompanyModel(
    company_name = company.company_name,
    company_email = company.company_email,
    company_password = company.company_password
  )
  
  db.add(new_company)
  db.commit()
  db.refresh(new_company)

  return new_company