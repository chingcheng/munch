from fastapi import FastAPI
import os

app = FastAPI()

pool = ConnectionPool(conninfo=os.environ["postgresql://accounts:password@postgres/munches-service"])
