# cypress
Public Repo showcasing Cypress API and End-to-End Tests for the Stride-Builder platform

## Cypress Cloud Test Statuses

Cypress Test Results are stored in Cypress Cloud and are publically accessible. Click the badges below to see more details about test runs

### API Tests
[![API Tests](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/a3iq77&style=for-the-badge&logo=cypress)](https://cloud.cypress.io/projects/a3iq77/runs)
### E2E Tests
[![End-to-End Tests](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/uo9x5r/main&style=for-the-badge&logo=cypress)](https://cloud.cypress.io/projects/uo9x5r/runs)


## Getting Started Locally
Cypress is set up to have two different test suites
- API Testing (against stride-builder/api)
- E2E Testing (against stride-builder/app)


```
# Clone this repo
git clone https://github.com/stride-builder/cypress

# Install via npm
npm i

# Setup the .env file with appropriate values
cp .env.example .env

# Start Cypress in Open Mode
npm run cy:open

# Start Cypress Run for API Tests
npm run cy:run:api

# Start Cypress Run for E2E Tests
npm run cy:run:e2e
```

## Linting
Always good to lint! You can easily run lint with the following commands:
```
# Identify lint issues
npm run lint

# Fix all fixable errors
npm run lint:fix

# Want to tackle one lint rule at a time?
npm run lint:nibble
```