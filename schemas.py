from pydantic import BaseModel, EmailStr

class CompanySchema(BaseModel):
  company_id: int
  company_name: str
  company_email: str
  
  class Config:
    from_attributes = True