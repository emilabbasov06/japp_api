from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session

from models import VacancyModel
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
  return {
    'vacancy': vacancy
  }