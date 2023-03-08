from fastapi.testclient import TestClient
from main import app
from queries.munches import MunchRepository
from authenticator import authenticator

client = TestClient(app)


class CreateMunchQueries:
    def create(self, munch):
        result = {
            "id": 0,
            "location": "string",
            "rating": 0,
            "review": "string",
            "photo": "string",
            "tag": False,
            "city": "string",
            "state": "string",
            "user_id": '0'
        }
        result.update(munch)
        return result


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


def test_create_munch():

    app.dependency_overrides[MunchRepository] = CreateMunchQueries

    app.dependency_overrides[
        authenticator.try_get_current_account_data
        ] = account_override

    json = {
            "id": 0,
            "location": "string",
            "rating": 0,
            "review": "string",
            "photo": "string",
            "tag": False,
            "city": "string",
            "state": "string",
            "user_id": '0'
    }

    expected = {
            "id": 0,
            "location": "string",
            "rating": 0,
            "review": "string",
            "photo": "string",
            "tag": False,
            "city": "string",
            "state": "string",
            "user_id": '0'
    }

    response = client.post("/munches", json=json)
    assert response.status_code == 200
    assert response.json() == expected
    app.dependency_overrides = {}
