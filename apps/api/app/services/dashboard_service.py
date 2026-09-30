from app.repositories.demo_repository import get_dashboard_data
from app.schemas.dashboard import DashboardRead


def get_dashboard() -> DashboardRead:
    return DashboardRead(**get_dashboard_data())
