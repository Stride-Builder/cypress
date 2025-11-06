import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    defaultBrowser: 'electron',
  },
  projectId: process.env.CYPRESS_PROJECT_ID,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
    CYPRESS_BASE_URL: process.env.CYPRESS_BASE_URL,
    CYPRESS_API_BASE_URL: process.env.CYPRESS_API_BASE_URL,
    apiUrl: process.env.CYPRESS_API_BASE_URL,
    CYPRESS_MASTER_USER: process.env.CYPRESS_MASTER_USER,
    CYPRESS_MASTER_PASSWORD: process.env.CYPRESS_MASTER_PASSWORD,
  },
})
