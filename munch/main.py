from fastapi import FastAPI
import os
from psycopg_pool import ConnectionPool
from routers import munches, accounts



app = FastAPI()
app.include_router(munches.router)
app.include_router(accounts.router)

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
