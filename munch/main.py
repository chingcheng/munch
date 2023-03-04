from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import munches, accounts, comments
from authenticator import authenticator

app = FastAPI()
app.include_router(munches.router)
app.include_router(accounts.router)
app.include_router(comments.router)
app.include_router(authenticator.router)

origins = [
    os.environ.get("CORS_HOST", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
