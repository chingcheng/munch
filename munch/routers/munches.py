from fastapi import APIRouter
from queries.munches import MunchIn


router = APIRouter()

@router.post("/munches")
def create_munch(munch: MunchIn):
    return munch
