# Madan CI/CD

A simple Node.js project that shows a basic Docker + Jenkins CI/CD flow.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm start
```

3. Open:

```bash
http://localhost:3000
```

## Docker

Build and run the app:

```bash
docker build -t madan-ci-cd .
docker run -d -p 3000:3000 --name madan madan-ci-cd
```

Stop and remove:

```bash
docker stop madan
docker rm madan
```

## Jenkins

The `Jenkinsfile` does three things:

- checkout the repo
- build the Docker image
- deploy the container on port `3000`

## Files

- `index.js` — Express server
- `Dockerfile` — container build
- `Jenkinsfile` — CI/CD pipeline
- `package.json` — dependencies

## Response

`GET /` returns:

> CI/CD Pipeline Success | GitHub → Jenkins → Docker → AWS EC2 Deployment Complete - madan

## Requirements

- Node.js 18+
- npm
- Docker
- Jenkins (optional)
