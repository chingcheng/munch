from fastapi import APIRouter, Depends, Response, HTTPException
from typing import Union, Optional, List
from queries.comments import (
    Error,
    CommentIn,
    CommentOut,
    CommentRepository,
)
from authenticator import authenticator

router = APIRouter()


@router.post("/comments/{munch_id}",
             response_model=Union[CommentOut, Error])
def create_comment(
    munch_id: int,
    comment: CommentIn,
    response: Response,
    repo: CommentRepository = Depends(),
    account_data: dict = Depends(
        authenticator.get_current_account_data),
):
    if account_data is not None:
        try:
            comment.user_id = account_data["id"]
            comment.user_username = account_data["username"]
            return repo.create(comment)
        except Exception:
            raise HTTPException(status_code=400,
                                detail="Create comment did not work")


@router.put("/comments/{id}",
            response_model=Union[CommentOut, Error])
def update_comment(
    id: int,
    comment: CommentIn,
    repo: CommentRepository = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data),
) -> Union[Error, CommentOut]:
    existing_comment = repo.get_one(id)
    if existing_comment is None:
        raise HTTPException(status_code=404, detail="Comment not found")
    if account_data is not None:
        return repo.update(id, comment)
    else:
        raise HTTPException(status_code=401, detail="Unauthorized")


@router.delete("/comments/{id}",
               response_model=bool)
def delete_comment(
    id: int,
    repo: CommentRepository = Depends(),
    account_data: Optional[dict] = Depends(
        authenticator.try_get_current_account_data)
) -> bool:
    if account_data is not None:
        return repo.delete(id)


@router.get("/comments", response_model=Union[
    List[CommentOut], Error])
def get_all_comments(
    repo: CommentRepository = Depends(),
    account_data: dict = Depends(
        authenticator.get_current_account_data),
):
    if account_data is not None:
        return repo.get_all()
    else:
        raise HTTPException(status_code=401, detail="Unauthorized")


@router.get("/comments/{id}", response_model=CommentOut)
def get_one_comment(
    id: int,
    repo: CommentRepository = Depends(),
    account_data: dict = Depends(
        authenticator.get_current_account_data),
) -> CommentOut:
    comment = repo.get_one(id)
    if comment is not None and account_data is not None:
        return comment
    if comment is None:
        raise HTTPException(status_code=404, detail="Comment not found")
    if account_data is None:
        raise HTTPException(status_code=401, detail="Unauthorized")
