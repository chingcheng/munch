from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator


from pydantic import BaseModel

from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountQueries,
    DuplicateAccountError,
    AccountOutWithPassword,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.get("munch/protected", response_model=bool)
async def get_protected(
    # add services to be protected
    # munches: MunchQueries = Depends()
    # return munches.get_account_munches(account_data)
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    # if account_data:
    # return account_data["id"]
    return True


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):

    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


@router.delete("/accounts/{id}", response_model=bool)
def delete_account(
    id: int,
    repo: AccountQueries = Depends(),
) -> bool:
    return repo.delete(id)


# @router.put("/accounts/{id}", response_model=AccountOut)
# def update_account(
#     id: int,
#     user: AccountIn,
#     repo: AccountQueries = Depends(),
# ) -> AccountOutWithPassword:
#     return repo.update(id, user)


@router.put("/accounts/{id}", response_model=AccountOut)
def update_account(
    id: int,
    user: AccountIn,
    repo: AccountQueries = Depends(),
) -> AccountOutWithPassword:
    return repo.update(id, user)
