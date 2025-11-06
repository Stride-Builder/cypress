import { getAPI, postAPI } from '../commands/http'

const baseUrl = `${Cypress.env('CYPRESS_API_BASE_URL')}/auth`

/**
 * Gets the login URL from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getLoginURLAPI(failOnStatusCode = true) {
  return getAPI(`${baseUrl}/login`, { failOnStatusCode })
}

/**
 * Gets the signup URL from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getSignupURLAPI(failOnStatusCode = true) {
  return getAPI(`${baseUrl}/signup`, { failOnStatusCode })
}

/**
 * Gets the session from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getSessionAPI(failOnStatusCode = true) {
  return getAPI(`${baseUrl}/session`, { failOnStatusCode })
}

/**
 * Gets the logout URL from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getLogoutAPI(failOnStatusCode = true) {
  return getAPI(`${baseUrl}/logout`, { failOnStatusCode })
}

/**
 * Logs out the current authenticated athlete
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function logoutAPI(failOnStatusCode = true) {
  return postAPI(`${baseUrl}/logout`, {}, { failOnStatusCode })
}

/**
 * Cleans up the sessions from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function cleanupSessionAPI(failOnStatusCode = true) {
  return postAPI(`${baseUrl}/cleanup-sessions`, { failOnStatusCode })
}

/**
 * Gets the Strava auth URL from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getStravaAuthURLAPI(failOnStatusCode = true) {
  return getAPI(`${baseUrl}/strava/authorize`, { failOnStatusCode })
}

/**
 * Gets the Strava callback from the API
 * @param {boolean} failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getStravaCallbackAPI(failOnStatusCode = true) {
  return getAPI(`${baseUrl}/strava/callback`, { failOnStatusCode })
}
