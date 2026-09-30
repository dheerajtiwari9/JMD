from app.repositories.demo_repository import add_goal
from app.repositories.demo_repository import list_goals as read_goals
from app.schemas.goal import GoalCreate, GoalRead


def list_goals() -> list[GoalRead]:
    return [GoalRead(**goal) for goal in read_goals()]


def create_goal(goal: GoalCreate) -> GoalRead:
    created = add_goal(title=goal.title.strip(), subject=goal.subject.strip())
    return GoalRead(**created)
