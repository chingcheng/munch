from fastapi import FastAPI
import os


app = FastAPI()

pool = ConnectionPool(conninfo=os.environ["postgresql://munch:password@postgres/munch"])
