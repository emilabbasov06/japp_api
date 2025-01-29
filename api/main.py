from fastapi import FastAPI, Depends, HTTPException, status

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Sequence, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, Session
from datetime import datetime

from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

engine = create_engine('mysql://root:admin_001@localhost/creative')
SessionLocal = sessionmaker(bind=engine)
session = SessionLocal()

Base = declarative_base()


class CategoryModel(Base):
  __tablename__ = 'categories'
  
  category_id = Column(Integer, Sequence('category_id_seq'), primary_key=True)
  category_name = Column(String(255))


class CompanyModel(Base):
  __tablename__ = 'companies'
  
  company_id = Column(Integer, Sequence('company_id_seq'), primary_key=True)
  company_name = Column(String(255))
  company_email = Column(String(255), unique=True)
  company_password = Column(String(255))
  
  
class VacancyModel(Base):
  __tablename__ = 'vacancies'
  
  vacancy_id = Column(Integer, Sequence('vacancy_id_seq'), primary_key=True)
  vacancy_title = Column(String(255))
  vacancy_content = Column(Text)
  vacancy_location = Column(String(255))
  vacancy_salary = Column(Float)
  vacancy_type = Column(String(255))
  vacancy_start_date = Column(DateTime, default=datetime.utcnow)
  vacancy_end_date = Column(DateTime)
  company_id = Column(Integer, ForeignKey('companies.company_id'), nullable=False)
  category_id = Column(Integer, ForeignKey('categories.category_id'), nullable=False)
  company = relationship('CompanyModel')
  category = relationship('CategoryModel')
  
  
# PYDANTIC SCHEMAS
class CompanyOut(BaseModel):
  company_id: int
  company_name: str
  company_email: str
  
  class Config:
    from_attributes = True


Base.metadata.create_all(engine)

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

app = FastAPI()


origins = [
  'http://localhost:5173',
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],  # You can specify a list of allowed origins instead of "*"
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)


@app.get('/categories')
def get_categories(db: Session = Depends(get_db)):
  categories = db.query(CategoryModel).all()
  return {
    'categories': categories
  }


@app.get('/companies')
def get_companies(db: Session = Depends(get_db)):
  companies = db.query(CompanyModel).all()
  return [CompanyOut.model_validate(company, from_attributes=True) for company in companies]


@app.get('/vacancies')
def get_vacancies(db: Session = Depends(get_db)):
  vacancies = db.query(VacancyModel).all()
  return {
    'vacancies': vacancies
  }