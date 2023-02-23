from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool

class Error(BaseModel):
    message: str


class MunchIn(BaseModel):
    location: str
    rating: int
    review: str
    photo: str
    tag: Optional[bool]


class MunchOut(BaseModel):
    id: int
    location: str
    rating: int
    review: str
    photo: str
    tag: Optional[bool]


class MunchRepository:
    def get_all(self) -> Union[Error, List[MunchOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, location, rating, review, photo, tag
                        FROM munches;
                        """
                    )
                    return [
                        self.record_to_munch_out(record)
                        for record in db
                    ]
        except Exception:
            return {"message": "Could not get all munches"}

    def create(self, munch: MunchIn) -> Union[MunchOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO munches
                            (location, rating, review, photo, tag)
                        VALUES
                            (%s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            munch.location,
                            munch.rating,
                            munch.review,
                            munch.photo,
                            munch.tag
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.munch_in_to_out(id, munch)
        except Exception:
            print("exception!!!!!!!!", Exception)
            return {"message": "Create munch did not work"}

    def get_one(self, munch_id: int) -> Optional[MunchOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, location, rating, review, photo, tag
                        FROM munches
                        WHERE id = %s
                        """,
                        [munch_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_munch_out(record)
        except Exception:
            return {"message": "Could not get that munch"}

    def delete(self, munch_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM munches
                        WHERE id = %s
                        """,
                        [munch_id]
                    )
                    return True
        except Exception:
            return False

    def update(self, munch_id: int, munch: MunchIn) -> Union[MunchOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        UPDATE munches
                        SET location= %s,
                            rating= %s,
                            review = %s,
                            photo = %s,
                            tag = %s
                        WHERE id = %s
                        """,
                    [
                        munch.location,
                        munch.rating,
                        munch.review,
                        munch.photo,
                        munch.tag,
                        munch_id
                    ]
                    )
                    return self.munch_in_to_out(munch_id, munch)
        except Exception:
            return {"message": "Could not update that munch"}

    def munch_in_to_out(self, id: int, munch: MunchIn):
        old_data = munch.dict()
        return MunchOut(id=id, **old_data)

    def record_to_munch_out(self, record):
        return MunchOut(
            id=record[0],
            location=record[1],
            rating=record[2],
            review=record[3],
            photo=record[4],
            tag=record[5],
        )
