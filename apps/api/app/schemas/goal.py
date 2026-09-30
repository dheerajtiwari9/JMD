from pydantic import BaseModel, ConfigDict, Field


class GoalCreate(BaseModel):
    title: str = Field(min_length=3, max_length=120)
    subject: str = Field(min_length=2, max_length=60)


class GoalRead(GoalCreate):
    model_config = ConfigDict(from_attributes=True)

    id: str
    done: bool
