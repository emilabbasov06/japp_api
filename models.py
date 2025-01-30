from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Sequence
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime


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