from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries
from authenticator import authenticator

client = TestClient(app)


class GetAllAccounts:
    def get_all(self):
        return [get_accounts]


get_accounts = {
    "id": 1,
    "first_name": "first",
    "last_name": "last",
    "email": "email",
    "username": "username",
    "bio": "bio"
    }


test_account = {
  "id": 1,
  "first_name": "first",
  "last_name": "last",
  "email": "email",
  "username": "username",
  "bio": "bio"
}


def account_override():
    return test_account


def test_get_all_accounts():

    app.dependency_overrides[AccountQueries] = GetAllAccounts

    app.dependency_overrides[
        authenticator.try_get_current_account_data
        ] = account_override

    response = client.get("/accounts")

    print("STATUS", response.status_code)
    print("RESPONSE", response.json())

    assert response.status_code == 200
    assert response.json() == [get_accounts]

    app.dependency_overrides = {}
