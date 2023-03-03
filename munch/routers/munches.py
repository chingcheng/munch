from fastapi import APIRouter, Depends, Response, HTTPException
from typing import List, Optional, Union
from queries.munches import (
    Error,
    MunchIn,
    MunchOut,
    MunchRepository,
)
from authenticator import authenticator

router = APIRouter()


@router.get("/munches", response_model=Union[List[MunchOut], Error])
def get_all_munches(
    repo: MunchRepository = Depends(),
    account_data: dict = Depends(
        authenticator.get_current_account_data),
):
    if account_data is not None:
        return repo.get_all()
    else:
        raise HTTPException(status_code=401, detail="Unauthorized")


@router.post("/munches", response_model=Union[MunchOut, Error])
def create_munch(
    munch: MunchIn,
    response: Response,
    repo: MunchRepository = Depends(),
    account_data: dict = Depends(
        authenticator.get_current_account_data
    ),
):
    if account_data is not None:
        try:
            munch.user_id = account_data["id"]
            return repo.create(munch)
        except Exception:
            raise HTTPException(status_code=400,
                                detail="Create munch did not work")


@router.get("/munches/{id}", response_model=Optional[MunchOut])
def get_one_munch(
    id: int,
    response: Response,
    repo: MunchRepository = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
) -> MunchOut:
    munch = repo.get_one(id)
    if account_data is not None and munch is not None:
        return munch
    if munch is None:
        raise HTTPException(status_code=404, detail="Munch not found")
    raise HTTPException(status_code=401, detail="Unauthorized")


@router.put("/munches/{id}", response_model=Union[MunchOut, Error])
def update_munch(
    id: int,
    munch: MunchIn,
    repo: MunchRepository = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data
    ),
) -> Union[Error, MunchOut]:
    existing_munch = repo.get_one(id)
    if existing_munch is None:
        raise HTTPException(status_code=404, detail="Munch not found")
    if account_data is not None:
        return repo.update(id, munch)
    else:
        raise HTTPException(status_code=401, detail="Unauthorized")


@router.delete("/munches/{id}", response_model=bool)
def delete_munch(
    id: int,
    repo: MunchRepository = Depends(),
) -> bool:
    return repo.delete(id)
