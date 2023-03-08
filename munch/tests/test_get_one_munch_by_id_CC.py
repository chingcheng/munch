from fastapi.testclient import TestClient
from main import app
from queries.munches import MunchRepository, MunchOut
from authenticator import authenticator

client = TestClient(app)


def get_current_munch_data_mock():
    return {
        "id": 0,
        "location": "string"
    }


class GetMunchRepositoryMock(MunchRepository):
    def get_munch_by_id(self, id: int) -> MunchOut:
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


def test_get_account():
    app.dependency_overrides[MunchRepository] = GetMunchRepositoryMock
    app.dependency_overrides[
        authenticator.get_current_account_data
        ] = get_current_munch_data_mock

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
