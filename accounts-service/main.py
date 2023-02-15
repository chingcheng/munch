from fastapi import FastAPI


app = FastAPI()

pool = ConnectionPool(conninfo=os.environ["postgresql://accounts:password@postgres/accounts-service"])
