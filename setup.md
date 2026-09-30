# MindMapEd Setup Guide

This guide covers local setup for the FastAPI API and Expo mobile app on macOS. The API uses Poetry and targets Python 3.14.

> [!WARNING]
> This development MVP uses synthetic, in-memory records. Authentication, authorization, durable storage, and production safeguarding controls are not implemented. Do not use real student or well-being data.

## Prerequisites

- macOS
- Python 3.14.7 (or another Python 3.14 patch release)
- Poetry 2.x
- Node.js 20+ and npm 10+ for the mobile app
- Expo Go, or Xcode / Android Studio for simulator use
- Docker Desktop for the optional PostgreSQL service

Check that the Python 3.14 interpreter is available:

```bash
python3.14 --version
```

If needed, install Python 3.14 with Homebrew or the official Python installer, then reopen the terminal.

## Install Poetry

```bash
brew install poetry
poetry --version
```

The API dependencies and tool settings are declared in [apps/api/pyproject.toml](apps/api/pyproject.toml). The [apps/api/poetry.lock](apps/api/poetry.lock) file pins resolved dependency versions for repeatable installations. Do not edit the lockfile manually.

## Install the API

Run these commands from the repository root:

```bash
cd apps/api
poetry env use python3.14
poetry install
cp .env.example .env
poetry run python --version
poetry env info
```

Poetry creates and manages an isolated API environment using the selected interpreter. It is separate from any repository-root `.venv`; there is no need to activate either environment manually. Use `poetry run` for API commands.

## Start the API

From `apps/api`:

```bash
poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

- API documentation: <http://localhost:8000/docs>
- Health check: <http://localhost:8000/health>
- Versioned dashboard: <http://localhost:8000/api/v1/dashboard>

Stop the server with `Control+C`. PostgreSQL is not required; the current repository uses in-memory demo data.

## Tests and code quality

From `apps/api`:

```bash
poetry run pytest
poetry run ruff check app tests
poetry run ruff format --check app tests
```

Format code when needed:

```bash
poetry run ruff check --fix app tests
poetry run ruff format app tests
```

## Managing dependencies

Add runtime dependencies with `poetry add package-name`; add development-only dependencies with `poetry add --group dev package-name`. Commit both `pyproject.toml` and `poetry.lock` after dependency changes.

Install exactly the locked dependency set with:

```bash
poetry sync
```

CI should run `poetry sync --no-interaction`, then execute the test and Ruff commands above using the Python version declared by the project.

## Optional PostgreSQL

The PostgreSQL service is reserved for future persistence work; the current API does not connect to it.

```bash
cd ../..
docker compose up -d postgres
```

Stop the service with `docker compose down`.

## Mobile app

In another terminal, from the repository root:

```bash
npm --prefix apps/mobile install
npm run mobile
```

Set `EXPO_PUBLIC_API_URL` in `apps/mobile/.env` if needed:

- iOS Simulator: `http://localhost:8000/api/v1`
- Android Emulator: `http://10.0.2.2:8000/api/v1`
- Physical device: use the development computer's LAN IP address

The mobile app displays synthetic sample data if it cannot reach the API.

## API layout

```text
apps/api/
├── app/
│   ├── api/v1/
│   │   ├── api.py                 # v1 router composition
│   │   └── endpoints/             # HTTP handlers by feature
│   ├── core/                      # Application configuration
│   ├── repositories/              # Data access adapters
│   ├── schemas/                   # Request and response models
│   ├── services/                  # Feature operations and business rules
│   └── main.py                    # FastAPI setup and router mounting
├── tests/                         # API tests
├── .env.example                   # Safe local configuration defaults
├── .python-version                # Python runtime selection
├── poetry.lock                    # Resolved dependencies
└── pyproject.toml                 # Poetry and tool configuration
```

Routes are versioned both structurally and in their URL. Add future endpoint contracts under `app/api/v2/`; keep HTTP handling, schemas, business logic, and data access in their respective layers.
