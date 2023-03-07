from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries
from authenticator import authenticator

client = TestClient(app)


class TestAccountQueries:
    def get_all(self):
        return [all_accounts_test]


all_accounts_test = {
  "id": 0,
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "username": "string",
  "bio": "string"
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


def test_get_all_accounts():

    app.dependency_overrides[AccountQueries] = TestAccountQueries

    app.dependency_overrides[
        authenticator.try_get_current_account_data
        ] = account_override

    response = client.get("/accounts")

    assert response.status_code == 200
    assert response.json() == [all_accounts_test]

    app.dependency_overrides = {}
