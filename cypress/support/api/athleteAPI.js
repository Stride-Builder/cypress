import { getAPI, postAPI, putAPI, deleteAPI } from '../commands/http'

const baseUrl = `${Cypress.env('CYPRESS_API_BASE_URL')}/api/athlete`

/**
 * Gets the current authenticated athlete
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getAthleteAPI(failOnStatusCode = true) {
  return getAPI(baseUrl,
    { failOnStatusCode })
}

/**
 * Creates a new athlete
 * @param {Object} data - The data to create the athlete
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function createAthleteAPI(data, options = { headers: {} }, failOnStatusCode = true) {
  return postAPI(baseUrl, data, options, false, failOnStatusCode)
}

/**
 * Removes a connection from the current authenticated athlete
 * @param {string} provider - The connection provider (e.g., 'strava', 'garmin')
 * @returns {Cypress.Chainable} The response from the DELETE request
 */
export function removeAthleteConnectionAPI(provider, options = { headers: {} }, failOnStatusCode = true) {
  return deleteAPI(`${baseUrl}/connections/${provider}`, options, failOnStatusCode)
}

/**
 * Updates the current authenticated athlete
 * @param {Object} data - The data to update the athlete
 * @returns {Cypress.Chainable} The response from the PUT request
 */
export function updateAthleteAPI(data, failOnStatusCode = true) {
  return putAPI(baseUrl, data, {}, failOnStatusCode)
}
