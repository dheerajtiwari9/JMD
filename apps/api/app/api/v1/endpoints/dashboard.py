from fastapi import APIRouter

from app.schemas.dashboard import DashboardRead
from app.services.dashboard_service import get_dashboard

router = APIRouter()


@router.get("", response_model=DashboardRead)
def read_dashboard() -> DashboardRead:
    return get_dashboard()
