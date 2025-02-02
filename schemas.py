from pydantic import BaseModel, EmailStr

class CompanySchema(BaseModel):
  company_id: int
  company_name: str
  company_email: str
  
  class Config:
    from_attributes = True


class CreateCompanySchema(BaseModel):
  company_name: str
  company_password: str
  company_email: EmailStr
  
  class Config:
    from_attributes = True


class CreateCategorySchema(BaseModel):
  category_name: str
  
  class Config:
    from_attributes = True


class UpdateVacancySchema(BaseModel):
  vacancy_title: str
  vacancy_content: str
  vacancy_location: str
  vacancy_salary: float
  vacancy_type: str
  vacancy_start_date: str
  vacancy_end_date: str


class LoginSchema(BaseModel):
  email: EmailStr
  password: str