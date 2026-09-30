import os
from pathlib import Path

from dotenv import load_dotenv

# Load the API-local environment file regardless of the current working directory.
load_dotenv(Path(__file__).resolve().parents[2] / ".env")

API_TITLE = "MindMapEd API"
API_DESCRIPTION = (
    "Privacy-conscious learning workspace API MVP. Demo data is in-memory only."
)
API_VERSION = "0.1.0"
API_V1_PREFIX = "/api/v1"


def get_cors_origins() -> list[str]:
    configured = os.getenv(
        "CORS_ORIGINS", "http://localhost:8081,http://localhost:19006"
    )
    return [origin.strip() for origin in configured.split(",") if origin.strip()]
