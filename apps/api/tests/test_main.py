import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.repositories.demo_repository import reset_demo_data

client = TestClient(app)


@pytest.fixture(autouse=True)
def reset_demo_records() -> None:
    reset_demo_data()


def test_health_check() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "service": "mindmaped-api"}


def test_dashboard_has_learning_summary() -> None:
    response = client.get("/api/v1/dashboard")
    assert response.status_code == 200
    body = response.json()
    assert body["student"]["display_name"]
    assert len(body["courses"]) >= 1
    assert body["summary"]["attendance_percent"] == 96


def test_goal_creation_validates_and_returns_demo_goal() -> None:
    response = client.post(
        "/api/v1/goals", json={"title": "Review algebra", "subject": "Mathematics"}
    )
    assert response.status_code == 201
    assert response.json()["title"] == "Review algebra"
    assert response.json()["done"] is False


def test_consent_can_be_read_and_updated() -> None:
    initial = client.get("/api/v1/consent")
    assert initial.status_code == 200
    assert initial.json()["share_wellbeing_summary"] is False

    updated = client.patch("/api/v1/consent", json={"share_wellbeing_summary": True})
    assert updated.status_code == 200
    assert updated.json()["share_wellbeing_summary"] is True
    assert updated.json()["share_progress_with_caregiver"] is True


def test_empty_consent_update_is_rejected() -> None:
    response = client.patch("/api/v1/consent", json={})
    assert response.status_code == 400
