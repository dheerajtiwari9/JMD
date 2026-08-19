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

The repository is currently being established. The commands below describe the intended local development workflow.

### Prerequisites

- Node.js 20+ and npm 10+
- Python 3.10+
- Docker Desktop and Docker Compose
- React Native CLI prerequisites for iOS and Android
- Xcode (macOS, for iOS development) and Android Studio (for Android development)
- Git

### 1. Clone and enter the repository

```bash
git clone https://github.com/your-org/mindmaped.git
cd mindmaped
```

### 2. Start infrastructure

```bash
docker compose up -d postgres
```

### 3. Configure the API

```bash
cd apps/api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

### 4. Configure and run the mobile client

In a second terminal:

```bash
cd apps/mobile
npm ci
npm start
```

Then launch a platform target from the React Native CLI or Metro prompt:

```bash
npm run ios
# or
npm run android
```

### Environment variables

Create `apps/api/.env` locally. Never commit real secrets.

```dotenv
APP_ENV=development
API_HOST=0.0.0.0
API_PORT=8000
DATABASE_URL=postgresql+psycopg://mindmaped:mindmaped@localhost:5432/mindmaped
JWT_SECRET_KEY=replace-with-a-local-development-secret
CORS_ORIGINS=http://localhost:8081
MODEL_PROVIDER=local
MODEL_VERSION=development
SENTRY_DSN=
PUSH_NOTIFICATIONS_ENABLED=false
```

For mobile development, use the platform-specific API URL: the Android emulator commonly reaches the host at `10.0.2.2`, while iOS Simulator can generally use `localhost`.

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