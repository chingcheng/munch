from fastapi.testclient import TestClient
from main import app
from queries.munches import MunchRepository, MunchOut
from authenticator import authenticator

client = TestClient(app)


class GetMunchRepositoryMock(MunchRepository):
    def get_one(self, id: int) -> MunchOut:
        if id == 1:
            return MunchOut(
                id=1,
                location="string",
                rating=1,
                review="string",
                photo="string",
                tag=False,
                city="string",
                state="string",
                user_id="1",
                user_username="string"
            )
        else:
            return None


test_account = {
  "id": 1,
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
            "id": 1,
            "location": "string",
            "rating": 1,
            "review": "string",
            "tag": False,
            "photo": "string",
            "city": "string",
            "state": "string",
            "user_id": "1",
            "user_username": "string"
        }
    app.dependency_overrides = {}
