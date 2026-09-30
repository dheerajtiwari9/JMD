from app.repositories.demo_repository import read_consent, save_consent
from app.schemas.consent import ConsentRead


def get_consent() -> ConsentRead:
    return ConsentRead(**read_consent())


def update_consent(changes: dict[str, bool]) -> ConsentRead:
    return ConsentRead(**save_consent(changes))
