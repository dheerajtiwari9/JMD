from pydantic import BaseModel


class StudentSummary(BaseModel):
    display_name: str
    greeting: str


class LearningSummary(BaseModel):
    weekly_learning_minutes: int
    weekly_learning_target_minutes: int
    assignments_due: int
    attendance_percent: int


class CourseProgress(BaseModel):
    id: str
    name: str
    grade: str
    progress: float
    color: str


class NextStep(BaseModel):
    title: str
    detail: str
    kind: str


class GoalSummary(BaseModel):
    id: str
    title: str
    subject: str
    done: bool


class DashboardRead(BaseModel):
    student: StudentSummary
    summary: LearningSummary
    courses: list[CourseProgress]
    next_step: NextStep
    goals: list[GoalSummary]
