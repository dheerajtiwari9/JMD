from copy import deepcopy
from typing import Any

_INITIAL_GOALS = [
    {
        "id": "goal-1",
        "title": "Practice fractions for 15 minutes",
        "subject": "Mathematics",
        "done": False,
    },
    {
        "id": "goal-2",
        "title": "Finish the ecosystem reading",
        "subject": "Science",
        "done": True,
    },
]
_INITIAL_CONSENT = {
    "share_progress_with_caregiver": True,
    "share_wellbeing_summary": False,
}

_goals = deepcopy(_INITIAL_GOALS)
_consent = deepcopy(_INITIAL_CONSENT)


def get_dashboard_data() -> dict[str, Any]:
    return {
        "student": {"display_name": "Alex Morgan", "greeting": "Good morning"},
        "summary": {
            "weekly_learning_minutes": 185,
            "weekly_learning_target_minutes": 240,
            "assignments_due": 2,
            "attendance_percent": 96,
        },
        "courses": [
            {
                "id": "math",
                "name": "Mathematics",
                "grade": "A−",
                "progress": 0.78,
                "color": "#6C63FF",
            },
            {
                "id": "science",
                "name": "Science",
                "grade": "B+",
                "progress": 0.64,
                "color": "#24A88A",
            },
            {
                "id": "english",
                "name": "English",
                "grade": "A",
                "progress": 0.86,
                "color": "#F2A65A",
            },
        ],
        "next_step": {
            "title": "Small steps add up",
            "detail": (
                "You’re building a steady learning rhythm. "
                "Pick one task to focus on next."
            ),
            "kind": "encouragement",
        },
        "goals": list_goals(),
    }


def list_goals() -> list[dict[str, Any]]:
    return deepcopy(_goals)


def add_goal(title: str, subject: str) -> dict[str, Any]:
    goal = {
        "id": f"goal-{len(_goals) + 1}",
        "title": title,
        "subject": subject,
        "done": False,
    }
    _goals.append(goal)
    return deepcopy(goal)


def read_consent() -> dict[str, bool]:
    return deepcopy(_consent)


def save_consent(changes: dict[str, bool]) -> dict[str, bool]:
    _consent.update(changes)
    return read_consent()


def reset_demo_data() -> None:
    """Restore sample data between tests; demo data is intentionally in-memory only."""
    _goals[:] = deepcopy(_INITIAL_GOALS)
    _consent.clear()
    _consent.update(deepcopy(_INITIAL_CONSENT))
