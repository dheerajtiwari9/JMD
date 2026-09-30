# MindMapEd

> **Understand the learner. Empower the journey.**
>
> An AI-assisted, cross-platform education platform that connects academic progress, emotional well-being, learning preferences, and career aspirations in one safe place.

[![CI](https://img.shields.io/github/actions/workflow/status/your-org/mindmaped/ci.yml?branch=main&label=CI&logo=github)](https://github.com/your-org/mindmaped/actions)
[![React Native](https://img.shields.io/badge/mobile-React%20Native-61DAFB?logo=react&logoColor=20232A)](https://reactnative.dev/)
[![FastAPI](https://img.shields.io/badge/API-FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![PyTorch](https://img.shields.io/badge/AI-PyTorch-EE4C2C?logo=pytorch&logoColor=white)](https://pytorch.org/)
[![PostgreSQL](https://img.shields.io/badge/data-PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> [!IMPORTANT]
> MindMapEd is an early-stage project. Its AI features are designed to support qualified educators and caregivers, never to replace professional educational, medical, or mental-health judgment.

## Contents

- [Why MindMapEd](#why-mindmaped)
- [Core Features](#core-features)
- [Users and Roles](#users-and-roles)
- [System Architecture](#system-architecture)
- [Privacy, Safety, and Ethics](#privacy-safety-and-ethics)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Why MindMapEd

Schools often have plenty of data about **what** a student achieved, but not enough context about **why** their performance changed. A falling grade can reflect a prerequisite gap, an unhealthy workload, exam anxiety, disengagement, or circumstances outside the classroom. Treating every signal as a marks problem leads to generic interventions and missed opportunities to help early.

MindMapEd brings academic evidence and student-reported well-being into a single, carefully permissioned platform. It helps students understand their own learning patterns, gives teachers actionable classroom insights, and gives parents a constructive view of progress without turning the home into a surveillance system.

The platform uses explainable analytics and human review to suggest next steps: targeted practice, a conversation with a trusted adult, a study-plan adjustment, or a referral to an appropriate professional. The goal is practical support, student agency, and better outcomes across the learner's chosen path.

## Core Features

### 📊 360° Academic Tracking

- Grade, assignment, attendance, and assessment monitoring
- Learning pace and completion analytics
- Subject-level performance trends and milestones
- Clear progress views for students, teachers, and parents

### 🧠 Psychology and Sentiment Engine

- Optional mood and reflection check-ins owned by the student
- Sentiment and stress-pattern detection with confidence indicators
- Learning-style exploration informed by the VARK model
- Proactive burnout signals based on changes over time, not a single response

### 🎯 Personalized Career Pathways

- Interest and strengths discovery
- Goal setting with measurable skill milestones
- Curated learning resources, projects, and mentor connections
- Progress mapping from current abilities to targeted career fields

### 🆘 Root-Cause Intervention System

- AI-assisted analysis of learning and engagement signals
- Distinguishes likely prerequisite gaps from factors such as workload or exam anxiety
- Explainable recommendations with evidence and confidence levels
- Tailored recovery plans that can be reviewed and adjusted by educators

### 👨‍🏫 Teacher Portal

- Class-wide dashboards with drill-down to individual progress
- Configurable academic and engagement flags
- Intervention notes and follow-up tracking
- Automated, editable progress-report drafts

### 👨‍👩‍👧 Parent Portal

- Timely academic and attendance insights
- Non-intrusive, consent-aware well-being indicators
- Guided homework support strategies
- Shared goals and communication prompts for home and school

## Users and Roles

| Capability | Student | Parent / Caregiver | Teacher / Counselor |
| --- | :---: | :---: | :---: |
| View personal academic progress | ✅ | ✅ | ✅ |
| Record mood and reflection check-ins | ✅ | — | — |
| Manage goals and career interests | ✅ | Support | Review |
| View class-level analytics | — | — | ✅ |
| Receive intervention recommendations | ✅ | ✅ | ✅ |
| Add intervention notes | — | — | ✅ |
| View well-being indicators | Own data | Consent-based summary | Permission-based summary |
| Manage consent and data-sharing settings | ✅ | For dependents | Within organization policy |
| Export or request personal data | ✅ | For dependents | Organization-managed |

> [!NOTE]
> Role permissions are scoped by school, class, relationship, consent, and local policy. A parent or teacher should never receive unrestricted access to a student's private reflections.

## System Architecture

```text
┌──────────────────────────────┐       HTTPS / JSON        ┌──────────────────────────────┐
│ Mobile Clients               │ ◄───────────────────────► │ API Gateway                  │
│ iOS + Android               │                           │ FastAPI + Auth + RBAC        │
│ React Native                │                           └──────────────┬───────────────┘
└──────────────────────────────┘                                          │
                                                                         │
                                             ┌───────────────────────────┼───────────────────────────┐
                                             │                           │                           │
                                             ▼                           ▼                           ▼
                                  ┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
                                  │ Core Services    │        │ AI / Psychology  │        │ Notifications    │
                                  │ Progress, goals, │        │ Engine           │        │ Email, push,     │
                                  │ roles, consent  │        │ PyTorch, rules,  │        │ in-app alerts    │
                                  └────────┬─────────┘        │ explainability  │        └──────────────────┘
                                           │                  └────────┬─────────┘
                                           └───────────────┬────────────┘
                                                           ▼
                                                ┌──────────────────────┐
                                                │ PostgreSQL            │
                                                │ Encrypted application │
                                                │ data + audit events   │
                                                └──────────────────────┘
```

### Architectural principles

- **Human-in-the-loop:** high-impact recommendations require educator or qualified professional review.
- **Least privilege:** every API request is authorized against role, organization, relationship, and consent.
- **Explainability by default:** recommendations show contributing signals, uncertainty, and a clear next action.
- **Data minimization:** collect only what is needed for a declared educational purpose and retain it for the shortest practical period.
- **Event-driven auditability:** sensitive reads, exports, consent changes, and interventions are recorded for review.

## Privacy, Safety, and Ethics

MindMapEd is designed around the heightened duty of care required when working with children and young people. Compliance is a product requirement, not a final checklist item.

- **Regulatory alignment:** design toward COPPA, FERPA, GDPR, and applicable regional student-data and safeguarding requirements. A deployment must be reviewed by qualified legal and privacy professionals for its jurisdiction.
- **Encryption:** use TLS for data in transit and strong encryption for data at rest, with managed key rotation and restricted operational access.
- **Consent and control:** provide age-appropriate consent flows, guardian controls where required, transparent notices, access requests, correction, deletion, and export workflows.
- **Purpose limitation:** never sell student data or use psychological signals for advertising, disciplinary automation, admissions decisions, or high-stakes profiling.
- **No diagnosis:** sentiment and stress models identify patterns for supportive follow-up; they do not diagnose mental-health conditions or determine a student's personality as fact.
- **Fairness and accessibility:** evaluate model performance across language, culture, disability, age, and socioeconomic context. Provide non-AI alternatives and accessible interfaces.
- **Safety escalation:** define local safeguarding and crisis-response procedures. A model alert is not an emergency service and must not delay human help.
- **Model governance:** version models, document training data provenance, monitor drift, test for harmful bias, and provide an appeal or correction path.

> [!WARNING]
> Do not enable production collection of child psychology or sentiment data until consent, retention, access controls, threat modeling, incident response, and an independent safeguarding review are complete.

## Getting Started

This repository contains a runnable starter MVP: an Expo React Native student app and a FastAPI demo API. Demo records are synthetic and held in API memory; restarting the API resets goal and consent changes. PostgreSQL is available for local infrastructure, but database persistence and authentication are not wired into this MVP yet.

### Prerequisites

- Python 3.14.7 (API)
- Poetry 2.x
- Node.js 20+ and npm 10+ (mobile app)
- Expo Go or Xcode / Android Studio (mobile preview / simulators)
- Docker Desktop (optional PostgreSQL service)

### 1. Start the API

```bash
cd apps/api
poetry env use python3.14
poetry install
cp .env.example .env
poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API is available at `http://localhost:8000`; interactive endpoint docs are at `http://localhost:8000/docs`. Try `GET /health`, `GET /api/v1/dashboard`, `GET /api/v1/goals`, and `GET /api/v1/consent`.

### 2. Run the mobile client

In a second terminal, from the repository root:

```bash
npm --prefix apps/mobile install
npm run mobile
```

Scan the Expo QR code with Expo Go, or press `i` / `a` in the Expo terminal to launch a simulator. For Android emulators, set `EXPO_PUBLIC_API_URL=http://10.0.2.2:8000/api/v1` in `apps/mobile/.env`; iOS Simulator can use the default `localhost` URL. For a physical device, use your development computer's LAN IP address instead of `localhost`.

The app includes clearly marked synthetic sample data when the API is unavailable. The Today, Progress, Goals, and Profile tabs are available; goal completion and new goals currently live in app state and reset on restart. This MVP does not implement authentication or production persistence.

Set `EXPO_PUBLIC_API_URL` in `apps/mobile/.env` when the default is not suitable:

```dotenv
EXPO_PUBLIC_API_URL=http://localhost:8000/api/v1
```

Use `http://10.0.2.2:8000/api/v1` for an Android emulator. A physical device must use the development computer's LAN IP address, and both devices must be on the same network. The current mobile experience uses synthetic demo records only; it does not collect real student information or implement AI, psychology, authentication, or PostgreSQL persistence.

### 3. Optional local PostgreSQL

Start the database when preparing to work on persistence:

```bash
docker compose up -d postgres
```

The connection string is documented in `apps/api/.env.example`. The current MVP intentionally does not store demo student records in PostgreSQL.

### Checks

```bash
cd apps/api && poetry run pytest
poetry run ruff check app tests
poetry run ruff format --check app tests
cd ../..
npm --prefix apps/mobile run typecheck
```

See [setup.md](setup.md) for Poetry installation, dependency management, linting, and the full API folder layout.

### API structure

The API uses a feature-oriented, layered layout. URL versioning is mounted in `app/main.py`; each version owns its router and endpoint modules, so new versions can coexist without mixing contracts.

```text
apps/api/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── api.py            # Composes the v1 router
│   │       └── endpoints/        # HTTP route handlers by feature
│   ├── core/                     # Application configuration
│   ├── repositories/             # Demo data access (in-memory only)
│   ├── schemas/                  # Request and response models
│   ├── services/                 # Feature/business operations
│   └── main.py                   # FastAPI app, middleware, router mounting
└── tests/                        # API tests
```

Versioned endpoints are under `/api/v1` (for example, `/api/v1/goals`). Keep transport concerns in endpoint modules, validation and API shapes in schemas, and data access behind repositories. The current in-memory repository is a development adapter, not a production persistence layer.

### Environment variables

Copy `apps/api/.env.example` to `apps/api/.env` and `apps/mobile/.env.example` to `apps/mobile/.env` as needed. Never commit real secrets.

```dotenv
APP_ENV=development
API_HOST=0.0.0.0
API_PORT=8000
CORS_ORIGINS=http://localhost:8081,http://localhost:19006
DATABASE_URL=postgresql+psycopg://mindmaped:mindmaped_dev_only@localhost:5432/mindmaped
```

`DATABASE_URL` is reserved for the planned persistence layer and is not read by the current API.

The app only presents synthetic sample student information. Do not enter real student data: authentication, role/consent authorization, durable storage, retention/deletion, and safeguarding workflows are not implemented. Well-being inference and collection are deliberately not part of this MVP.

## Roadmap

| Phase | Focus | Key outcomes |
| --- | --- | --- |
| **1. MVP** | Core learning workspace | Authentication, role-based access, grade and attendance tracking, student goals, consent records, and basic dashboards |
| **2. Beta Testing in Schools** | Validate workflows with real educators | Pilot schools, accessibility testing, feedback loops, data-retention controls, intervention tracking, and safety review |
| **3. Advanced AI Psychology Integration** | Add carefully governed intelligence | Opt-in check-ins, explainable sentiment trends, learning-pattern analysis, bias evaluation, human review queues, and model monitoring |
| **4. Global Rollout** | Expand responsibly across regions | Localization, regional compliance packages, scalable infrastructure, partner integrations, multilingual support, and independent impact evaluation |

## Contributing

Contributions are welcome, especially in accessibility, privacy engineering, education research, testing, and developer experience.

1. Open an issue describing the problem, proposed change, or research question.
2. Fork the repository and create a focused branch from `main`.
3. Add tests and documentation for behavioral changes.
4. Run the relevant checks locally and explain design trade-offs in the pull request.
5. Keep sensitive data out of fixtures, logs, screenshots, and commit history.
6. Sign off on the [Code of Conduct](CODE_OF_CONDUCT.md) and respect the project's safeguarding standards.

Before proposing AI or psychology-related changes, include the intended educational purpose, affected users, privacy impact, known limitations, and human escalation path.

## License

MindMapEd is intended to be released under the [MIT License](LICENSE). The license file will be added before the first public release.

---

**MindMapEd** is built to help every learner be seen as more than a score.