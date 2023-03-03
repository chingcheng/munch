from fastapi import APIRouter, Depends, Response
from typing import Union
from queries.comments import (
    Error,
    CommentIn,
    CommentOut,
    CommentRepository,
)

router = APIRouter()


@router.post("/munches/{munch_id}",
             response_model=Union[CommentOut, Error])
def create_comment(
    comment: CommentIn,
    response: Response,
    repo: CommentRepository = Depends()
):
    return repo.create(comment)


@router.put("/munches/{munch_id}/{comment_id}",
            response_model=Union[CommentOut, Error])
def update_comment(
    comment_id: int,
    comment: CommentIn,
    repo: CommentRepository = Depends(),
) -> Union[Error, CommentOut]:
    return repo.update(comment_id, comment)


@router.delete("/munches/{munch_id}/{comment_id}",
               response_model=bool)
def delete_comment(
    comment_id: int,
    repo: CommentRepository = Depends(),
) -> bool:
    return repo.delete(comment_id)
