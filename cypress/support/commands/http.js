export function getAPI(url, options = { headers: {}, body: {}, failOnStatusCode: true }) {
  const headers = {
    ...options.headers,
  }
  const body = {
    ...options.body,
  }
  return cy.request({
    method: 'GET',
    url,
    headers,
    body,
    failOnStatusCode: options.failOnStatusCode,
  })
}

export function postAPI(
  url,
  options = { headers: {}, body: {}, form: false, failOnStatusCode: true },
) {
  const headers = {
    ...options.headers,
  }
  const body = {
    ...options.body,
  }
  return cy.request({
    method: 'POST',
    url,
    headers,
    body,
    failOnStatusCode: options.failOnStatusCode,
  })
}

export function putAPI(
  url,
  options = { headers: {}, body: {}, form: false, failOnStatusCode: true },
) {
  const headers = {
    ...options.headers,
  }
  const body = {
    ...options.body,
  }
  return cy.request({
    method: 'PUT',
    url,
    headers,
    body,
    failOnStatusCode: options.failOnStatusCode,
  })
}

export function patchAPI(
  url,
  options = { headers: {}, body: {}, form: false, failOnStatusCode: true },
) {
  const headers = {
    ...options.headers,
  }
  const body = {
    ...options.body,
  }
  return cy.request({
    method: 'PATCH',
    url,
    headers,
    body,
    failOnStatusCode: options.failOnStatusCode,
  })
}

export function deleteAPI(
  url,
  options = { headers: {}, body: {}, form: false, failOnStatusCode: true },
) {
  const headers = {
    ...options.headers,
  }
  const body = {
    ...options.body,
  }
  return cy.request({
    method: 'DELETE',
    url,
    headers,
    body,
    failOnStatusCode: options.failOnStatusCode,
  })
}

/**
 * Send an OPTIONS request to check allowed methods and CORS headers
 * @param {string} url - The URL to send the OPTIONS request to
 * @param {Object} options - Additional options for the request
 * @returns {Cypress.Chainable} The response from the OPTIONS request
 */
export function optionsAPI(url, options = { headers: {}, failOnStatusCode: true }) {
  const headers = {
    ...options.headers,
  }
  return cy.request({
    method: 'OPTIONS',
    url,
    headers,
    failOnStatusCode: options.failOnStatusCode,
  })
}

// Register commands
Cypress.Commands.add('getAPI', getAPI)
Cypress.Commands.add('postAPI', postAPI)
Cypress.Commands.add('putAPI', putAPI)
Cypress.Commands.add('patchAPI', patchAPI)
Cypress.Commands.add('deleteAPI', deleteAPI)
Cypress.Commands.add('optionsAPI', optionsAPI)
