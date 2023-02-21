from fastapi import FastAPI
import os
from psycopg_pool import ConnectionPool
from routers import munches



app = FastAPI()
app.include_router(munches.router)

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
