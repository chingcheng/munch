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
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_all()


@router.post("/munches", response_model=Union[MunchOut, Error])
def create_munch(
    munch: MunchIn,
    response: Response,
    repo: MunchRepository = Depends(),
):
    try:
        return repo.create(munch)
    except Exception:
        raise HTTPException(status_code=400, detail="Create munch did not work")


@router.get("/munches/{munch_id}", response_model=Optional[MunchOut])
def get_one_munch(
    munch_id: int,
    response: Response,
    repo: MunchRepository = Depends(),
) -> MunchOut:
    munch = repo.get_one(munch_id)
    if munch is None:
        raise HTTPException(status_code = 404, detail="Munch not found")
    return munch


@router.put("/munches/{munch_id}", response_model=Union[MunchOut, Error])
def update_munch(
    munch_id: int,
    munch: MunchIn,
    repo:MunchRepository = Depends(),
) -> Union[Error, MunchOut]:
    if munch is None:
        raise HTTPException(status_code = 400, detail="Munch not found")
    return repo.update(munch_id, munch)


@router.delete("/munches/{munch_id}", response_model=bool)
def delete_munch(
    munch_id: int,
    repo: MunchRepository = Depends(),
) -> bool:
    return repo.delete(munch_id)
