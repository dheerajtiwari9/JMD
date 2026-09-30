from fastapi import APIRouter, HTTPException, status

from app.schemas.consent import ConsentRead, ConsentUpdate
from app.services.consent_service import get_consent, update_consent

router = APIRouter()


@router.get("", response_model=ConsentRead)
def read_consent() -> ConsentRead:
    return get_consent()


@router.patch("", response_model=ConsentRead)
def patch_consent(update: ConsentUpdate) -> ConsentRead:
    changes = update.model_dump(exclude_unset=True)
    if not changes:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Provide at least one consent preference.",
        )
    return update_consent(changes)
