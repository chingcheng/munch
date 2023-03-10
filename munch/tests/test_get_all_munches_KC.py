from fastapi.testclient import TestClient
from main import app
from queries.munches import MunchRepository
from authenticator import authenticator

client = TestClient(app)


class TestMunchQueries:
    def get_all(self):
        return [all_munches_test]


all_munches_test = {
    "id": 0,
    "location": "string",
    "rating": 0,
    "review": "string",
    "photo": "string",
    "tag": False,
    "city": "string",
    "state": "string",
    "user_id": '0',
    "user_username": "string"
    }


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


def test_get_all_munches():

    app.dependency_overrides[MunchRepository] = TestMunchQueries

    app.dependency_overrides[
        authenticator.try_get_current_account_data
        ] = account_override

    response = client.get("/munches")

    assert response.status_code == 200
    assert response.json() == [all_munches_test]

    app.dependency_overrides = {}
