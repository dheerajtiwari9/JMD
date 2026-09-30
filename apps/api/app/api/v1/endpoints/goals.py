from fastapi import APIRouter, status

from app.schemas.goal import GoalCreate, GoalRead
from app.services.goal_service import create_goal, list_goals

router = APIRouter()


@router.get("", response_model=list[GoalRead])
def read_goals() -> list[GoalRead]:
    return list_goals()


@router.post("", response_model=GoalRead, status_code=status.HTTP_201_CREATED)
def add_goal(goal: GoalCreate) -> GoalRead:
    return create_goal(goal)
