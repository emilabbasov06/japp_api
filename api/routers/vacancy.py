from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session

from models import VacancyModel
from schemas import UpdateVacancySchema
from database import get_db

router = APIRouter(
  prefix='/vacancies',
  tags=['Vacancies']
)

@router.get('/')
def get_vacancies(db: Session = Depends(get_db)):
  vacancies = db.query(VacancyModel).all()
  return {
    'vacancies': vacancies
  }


@router.get('/{id}')
def get_vacancy(id: int, db: Session = Depends(get_db)):
  vacancy = db.query(VacancyModel).filter(VacancyModel.vacancy_id == id).first()
  if not vacancy:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A vacancy with this id doesn't exist!")
  
  return {
    'vacancy': vacancy
  }


@router.delete('/{id}', status_code=status.HTTP_202_ACCEPTED)
def delete_vacancy(id: int, db: Session = Depends(get_db)):
  deleted_vacancy = db.query(VacancyModel).filter(VacancyModel.vacancy_id == id).first()
  if not delete_vacancy:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A vacancy with this id doesn't exist!")
    return
  db.delete(deleted_vacancy)
  db.commit()
  
  return {
    'deleted_vacancy': deleted_vacancy
  }


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED)
def update_vacancy(id: int, vacancy: UpdateVacancySchema, db: Session = Depends(get_db)):
  u_vacancy = db.query(VacancyModel).filter(VacancyModel.vacancy_id == id).first()
  if not u_vacancy:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="A vacancy with this id doesn't exist!")

  
  u_vacancy.vacancy_title = vacancy.vacancy_title
  u_vacancy.vacancy_content = vacancy.vacancy_content
  u_vacancy.vacancy_location = vacancy.vacancy_location
  u_vacancy.vacancy_salary = vacancy.vacancy_salary
  u_vacancy.vacancy_type = vacancy.vacancy_type
  u_vacancy.vacancy_start_date = vacancy.vacancy_start_date
  u_vacancy.vacancy_end_date = vacancy.vacancy_end_date
  
  db.commit()
  
  return {
    'updated_vacancy': u_vacancy
  }