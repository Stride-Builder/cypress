import { getAPI, postAPI, putAPI, deleteAPI } from '../commands/http'

const baseUrl = `${Cypress.env('CYPRESS_API_BASE_URL')}/api`

// Team API Base URLs
const teamsBaseUrl = `${baseUrl}/teams`
const athleteBaseUrl = `${baseUrl}/athlete`

// Team APIs

/**
 * Gets all teams
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getTeamsAPI(failOnStatusCode = true) {
  return getAPI(teamsBaseUrl, { failOnStatusCode })
}

/**
 * Creates a new team
 * @param {Object} data - The data to create the team
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function createTeamAPI(data, options = { headers: {} }, failOnStatusCode = true) {
  return postAPI(teamsBaseUrl, data, options, false, failOnStatusCode)
}

/**
 * Gets a team by ID
 * @param {number} teamId - The ID of the team to get
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getTeamAPI(teamId, failOnStatusCode = true) {
  return getAPI(`${teamsBaseUrl}/${teamId}`, { failOnStatusCode })
}

/**
 * Updates a team by ID
 * @param {number} teamId - The ID of the team to update
 * @param {Object} data - The data to update the team
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the PUT request
 */
export function updateTeamAPI(teamId, data, options = { headers: {} }, failOnStatusCode = true) {
  return putAPI(`${teamsBaseUrl}/${teamId}`, data, options, false, failOnStatusCode)
}

/**
 * Deletes a team by ID
 * @param {number} teamId - The ID of the team to delete
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the DELETE request
 */
export function deleteTeamAPI(teamId, options = { headers: {} }, failOnStatusCode = true) {
  return deleteAPI(`${teamsBaseUrl}/${teamId}`, options, failOnStatusCode)
}

/**
 * Invites an athlete to a team
 * @param {number} teamId - The ID of the team to invite to
 * @param {Object} data - The data to invite the athlete to the team
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function inviteToTeamAPI(teamId, data, options = { headers: {} }, failOnStatusCode = true) {
  return postAPI(`${teamsBaseUrl}/${teamId}/invite`, data, options, false, failOnStatusCode)
}

/**
 * Removes an athlete from a team
 * @param {number} teamId - The ID of the team to remove the athlete from
 * @param {Object} data - The data to remove the athlete from the team
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function removeFromTeamAPI(teamId, data, options = { headers: {} }, failOnStatusCode = true) {
  return postAPI(`${teamsBaseUrl}/${teamId}/remove`, data, options, false, failOnStatusCode)
}

/**
 * Accepts a team invite
 * @param {number} teamId - The ID of the team to accept the invite for
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function acceptTeamInviteAPI(teamId, options = { headers: {} }, failOnStatusCode = true) {
  return postAPI(`${teamsBaseUrl}/${teamId}/invite/accept`, {}, options, false, failOnStatusCode)
}

/**
 * Declines a team invite
 * @param {number} teamId - The ID of the team to decline the invite for
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function declineTeamInviteAPI(teamId, options = { headers: {} }, failOnStatusCode = true) {
  return postAPI(`${teamsBaseUrl}/${teamId}/invite/decline`, {}, options, false, failOnStatusCode)
}


// Athlete Focused Team APIs

/**
 * Gets all teams for the current authenticated athlete
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getAthleteTeamsAPI(options = { headers: {} }, failOnStatusCode = true) {
  return getAPI(`${athleteBaseUrl}/teams`, options, false, failOnStatusCode)
}

/**
 * Leaves a team for the current authenticated athlete
 * @param {number} teamId - The ID of the team to leave
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the DELETE request
 */
export function leaveTeamAPI(teamId, options = { headers: {} }, failOnStatusCode = true) {
  return deleteAPI(`${athleteBaseUrl}/teams/${teamId}`, options, failOnStatusCode)
}

/**
 * Gets all team invites for the current authenticated athlete
 * @param {Object} options - Additional options for the request
 * @param {boolean} options.failOnStatusCode - Whether to fail on status code other than 200
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getAthleteTeamInvitesAPI(options = { headers: {} }, failOnStatusCode = true) {
  return getAPI(`${athleteBaseUrl}/invites`, options, false, failOnStatusCode)
}