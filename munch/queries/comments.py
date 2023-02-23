from pydantic import BaseModel
from typing import Union
from queries.pool import pool


class Error(BaseModel):
    message: str


class CommentIn(BaseModel):
    comment: str
    munch_id: int

class CommentOut(BaseModel):
    id: int
    comment: str
    munch_id: int


class CommentRepository:
    def create(self, comment: CommentIn) -> Union[CommentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO comments
                            (comment,
                            munch_id)
                        VALUES
                            (%s, %s)
                        RETURNING id;
                        """,
                        [
                            comment.comment,
                            comment.munch_id,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.comment_in_to_out(id, comment)
        except Exception:
            return {"message": "Create comment did not work"}


    def update(self, comment_id: int, comment: CommentIn) -> Union[CommentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        UPDATE comments
                        SET comment = %s, munch_id = %s
                        WHERE id = %s AND munch_id = %s
                        """,
                        [
                            comment.comment,
                            comment.munch_id,
                            comment_id,
                            comment.munch_id
                        ]
                    )
                    return self.comment_in_to_out(comment_id, comment)
        except Exception:
            return {"comment": "Could not update that comment"}


    def delete(self, comment_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM comments
                        WHERE id = %s
                        """,
                        [comment_id]
                    )
                    return True
        except Exception:
            return False


    def comment_in_to_out(self, id: int, comment: CommentIn):
        old_data = comment.dict()
        return CommentOut(id=id, **old_data)


    def record_to_comment_out(self, record):
        return CommentOut(
            id=record[0],
            comment=record[1],
        )
