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


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get(
            "CORS_HOST",
            "https://munch.nov-pt-10.mod3projects.com"
        )
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
