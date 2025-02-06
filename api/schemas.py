from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class CompanySchema(BaseModel):
  company_id: int
  company_name: str
  company_info: str
  company_email: str
  
  class Config:
    from_attributes = True


class CreateCompanySchema(BaseModel):
  company_name: str
  company_email: str
  company_info: str
  company_password: str
  
  class Config:
    from_attributes = True


class CreateCategorySchema(BaseModel):
  category_name: str
  
  class Config:
    from_attributes = True


class CreateVacancySchema(BaseModel):
    vacancy_title: str
    vacancy_content: str
    vacancy_location: str
    vacancy_salary: float
    vacancy_type: str
    vacancy_start_date: datetime = datetime.now()
    vacancy_end_date: datetime
    category_id: int

    class Config:
        from_attributes = True

class UpdateVacancySchema(BaseModel):
  vacancy_title: str
  vacancy_content: str
  vacancy_location: str
  vacancy_salary: float
  vacancy_type: str


class LoginSchema(BaseModel):
  email: EmailStr
  password: str


class Token(BaseModel):
  access_token: str
  token_type: str


class TokenData(BaseModel):
  company_id: Optional[int] = None