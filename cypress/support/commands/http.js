/**
 * Default headers for API requests
 * @type {Object}
 */
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'accept': 'application/json',
}

/**
 * Send a GET request to the API
 * @param {string} url - The URL to send the GET request to
 * @param {Object} options - Additional options for the request
 * @returns {Cypress.Chainable} The response from the GET request
 */
export function getAPI(url, options = { headers: {}, failOnStatusCode: true }) {
  return cy.request({
    method: 'GET',
    url,
    headers: { ...options.headers },
    failOnStatusCode: options.failOnStatusCode,
  })
}

/**
 * Send a POST request to the API
 * @param {string} url - The URL to send the POST request to
 * @param {Object} options - Additional options for the request
 * @returns {Cypress.Chainable} The response from the POST request
 */
export function postAPI(
  url,
  body = {},
  options = { headers: {} },
  form = false,
  failOnStatusCode = true,
) {
  return cy.request({ method: 'POST', url, headers: { ...options.headers }, body, failOnStatusCode })
}

/**
 * Send a PUT request to the API
 * @param {string} url - The URL to send the PUT request to
 * @param {Object} options - Additional options for the request
 * @returns {Cypress.Chainable} The response from the PUT request
 */
export function putAPI(
  url,
  body = {},
  options = { headers: {} },
  failOnStatusCode = true,
) {
  return cy.request({
    method: 'PUT',
    url,
    headers: { ...options.headers },
    body,
    failOnStatusCode,
  })
}

/**
 * Send a PATCH request to the API
 * @param {string} url - The URL to send the PATCH request to
 * @param {Object} options - Additional options for the request
 * @returns {Cypress.Chainable} The response from the PATCH request
 */
export function patchAPI(
  url,
  body = {},
  options = { headers: {} },
  failOnStatusCode = true,
) {
  return cy.request({
    method: 'PATCH',
    url,
    headers: { ...options.headers },
    body,
    failOnStatusCode,
  })
}

/**
 * Send a DELETE request to the API
 * @param {string} url - The URL to send the DELETE request to
 * @param {Object} options - Additional options for the request
 * @returns {Cypress.Chainable} The response from the DELETE request
 */
export function deleteAPI(
  url,
  options = { headers: {} },
  failOnStatusCode = true,
) {
  return cy.request({
    method: 'DELETE',
    url,
    headers: { ...options.headers },
    failOnStatusCode,
  })
}
