from pydantic import BaseModel


class ConsentRead(BaseModel):
    share_progress_with_caregiver: bool
    share_wellbeing_summary: bool


class ConsentUpdate(BaseModel):
    share_progress_with_caregiver: bool | None = None
    share_wellbeing_summary: bool | None = None
