from fastapi import APIRouter
from queries.accounts import AccountIn


router = APIRouter()

@router.post("/token")
def sign_in(account: AccountIn):
    return account
