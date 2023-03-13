from pydantic import BaseModel
from typing import Union, List, Optional
from queries.pool import pool


class Error(BaseModel):
    message: str


class CommentIn(BaseModel):
    comment: str
    munch_id: int
    user_id: int
    user_username: str


class CommentOut(BaseModel):
    id: int
    comment: str
    munch_id: int
    user_id: int
    user_username: str


class CommentRepository:
    def create(self, comment: CommentIn) -> Union[CommentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO comments
                            (comment,
                            munch_id,
                            user_id,
                            user_username)
                        VALUES
                            (%s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            comment.comment,
                            comment.munch_id,
                            comment.user_id,
                            comment.user_username,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.comment_in_to_out(id, comment)
        except Exception:
            return {"message": "Create comment did not work"}

    def update(self, comment_id: int, comment: CommentIn) -> Union[CommentOut,
                                                                   Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE comments
                        SET
                        comment = %s,
                        munch_id = %s,
                        user_id = %s,
                        user_username = %s
                        WHERE id = %s
                        """,
                        [
                            comment.comment,
                            comment.munch_id,
                            comment.user_id,
                            comment.user_username,
                            comment_id,
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

    def get_all(self) -> Union[Error, List[CommentOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT
                            id,
                            comment,
                            munch_id,
                            user_id,
                            user_username
                        FROM comments;
                        """
                    )
                    return [
                        self.record_to_comment_out(record)
                        for record in db
                    ]
        except Exception:
            return {"message": "Could not get all comments"}

    def get_one(self, id: int) -> Optional[CommentOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            id,
                            comment,
                            munch_id,
                            user_id,
                            user_username
                        FROM comments
                        WHERE id = %s
                        """,
                        [id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_comment_out(record)
        except Exception:
            return {"message": "Could not get that comment"}

    def comment_in_to_out(self, id: int, comment: CommentIn):
        old_data = comment.dict()
        return CommentOut(id=id, **old_data)

    def record_to_comment_out(self, record):
        return CommentOut(
            id=record[0],
            comment=record[1],
            munch_id=record[2],
            user_id=record[3],
            user_username=record[4],
        )
