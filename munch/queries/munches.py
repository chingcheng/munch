from pydantic import BaseModel
from typing import Optional

class MunchIn(BaseModel):
    location: str
    rating: int
    review: str
    photo: str
    tag: Optional[bool]
