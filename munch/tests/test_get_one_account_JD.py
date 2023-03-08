from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries, AccountOut
from authenticator import authenticator

client = TestClient(app)


def get_current_account_data_mock():
    return {
        "id": 0,
        "username": "tester"
    }


class GetAccountQueriesMock(AccountQueries):
    def get_one(self, id: int) -> AccountOut:
        if id == 0:
            return AccountOut(
                id=0,
                first_name="test",
                last_name="test_last",
                email="test@test.com",
                username="tester",
                bio="string",
            )
        else:
            return None


def test_get_account():
    app.dependency_overrides[AccountQueries] = GetAccountQueriesMock
    app.dependency_overrides[
        authenticator.get_current_account_data
        ] = get_current_account_data_mock

    response = client.get("/accounts/5")
    data = response.json()
    if response.status_code == 404:
        assert data["detail"] == "User not found"
    else:
        assert response.status_code == 200
        assert data == {
            "id": 0,
            "first_name": "test",
            "last_name": "test_last",
            "email": "test@test.com",
            "username": "tester",
            "bio": "string"
        }
    app.dependency_overrides = {}
