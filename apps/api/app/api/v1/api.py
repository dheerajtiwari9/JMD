from fastapi import APIRouter

from app.api.v1.endpoints import consent, dashboard, goals

api_router = APIRouter()
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(goals.router, prefix="/goals", tags=["goals"])
api_router.include_router(consent.router, prefix="/consent", tags=["consent"])
