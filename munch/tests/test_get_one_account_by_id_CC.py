from fastapi.testclient import TestClient
from main import app
from queries.munches import MunchRepository, MunchOut
from authenticator import authenticator

client = TestClient(app)


class GetMunchRepositoryMock(MunchRepository):
    def get_one(self, id: int) -> MunchOut:
        if id == 0:
            return MunchOut(
                id=0,
                location="string",
                rating=0,
                review="string",
                photo="string",
                tag=False,
                city="string",
                state="string",
                user_id="0"
            )
        else:
            return None


test_account = {
  "id": 0,
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "username": "string",
  "bio": "string"
}


def account_override():
    return test_account


def test_get_one_munch():
    app.dependency_overrides[MunchRepository] = GetMunchRepositoryMock
    app.dependency_overrides[
        authenticator.get_current_account_data
        ] = account_override

    response = client.get("/munches/5")
    data = response.json()
    if response.status_code == 404:
        assert data["detail"] == "Munch not found"
    else:
        assert response.status_code == 200
        assert data == {
            "id": 0,
            "location": "string",
            "rating": 0,
            "review": "string",
            "tag": False,
            "photo": "string",
            "city": "string",
            "state": "string",
            "user_id": "0"
        }
    app.dependency_overrides = {}
