from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import category, company, vacancy, auth

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

app.include_router(auth.router)
app.include_router(category.router)
app.include_router(company.router)
app.include_router(vacancy.router)