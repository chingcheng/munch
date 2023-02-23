from fastapi import APIRouter
from queries.accounts import AccountIn


router = APIRouter()

@router.post("/token")
def sign_in(account: AccountIn):
    return account


@router.delete("/token")
def sign_out(account: AccountIn):
    pass


@router.delete("/users/{user_id}")
def delete_user(account: AccountIn):
    return account


@router.put("/accounts/{account_id}")
def update_account(
    account_id: int,
    account: AccountIn,
):
    pass
router = APIRouter()

@router.delete("/token")
def sign_out(account: AccountIn):
    return SignIn
