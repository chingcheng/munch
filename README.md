# Munch

Munch is a web application for individuals who are interested in creating and/or reading food-related reviews.

## Key Features - MVP

1. Users are able to sign-up for an account, log-in, and log-out.
2. After logging in, users can view their account details, edit their account and delete their account.
3. After logging in, users can create reviews, and edit/delete their own reviews.
4. After logging in, users can view other users' profiles and reviews.

## Live Demo

View a live demo of this project here: https://munchbunch.gitlab.io/munch/

## Design

- [GHI](docs/ghi.md)
- [Wireframe](docs/wireframe.md)
- [API](docs/api.md)

## Installation

1. Fork repository
2. Clone repository to local: `git clone https://gitlab.com/munchbunch/munch.git`
3. `cd` into new project directory
4. Run: `docker volume create postgres-data`
5. Run: `docker compose build`
6. Run: `docker compose up`

- Access the application on your web browser at http://localhost:3000/.

- Access the FastAPI Swagger UI at http://localhost:8010/docs.

## Requirements

1. Python 3
2. Docker Desktop
3. VS Code
4. FastAPI
5. A database compatible with PostgreSQL databases

## Maintainers

- @mschingcheng
- @kennedycassiday
- @matthewlmai
- @jason.dai
- @felipsh
