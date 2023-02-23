from fastapi import FastAPI
from routers import munches, accounts, comments

app = FastAPI()
app.include_router(munches.router)
app.include_router(accounts.router)
app.include_router(comments.router)
