import { getAPI, postAPI } from './http'
import { generateRandomString } from './generator'
import { logoutAPI } from '../api/authAPI'

Cypress.Commands.add('login', (email = Cypress.env('CYPRESS_MASTER_USER'), restoreSession = true) => {
  // Use environment variable with fallback for local dev
  const testEmail = email || Cypress.env('CYPRESS_MASTER_USER')
  const sessionName = restoreSession ? `api-session-${testEmail}` : `api-session-${testEmail}-${generateRandomString(5)}`
  cy.session(sessionName, () => {
    // Authenticate directly via API endpoint
    const apiUrl = Cypress.env('apiUrl') || Cypress.env('CYPRESS_API_BASE_URL')

    const testLoginEndpoint = Cypress.env('TEST_LOGIN_ENDPOINT')

    postAPI(`${apiUrl}${testLoginEndpoint}`, { email: testEmail })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.success).to.be.true

        // Store user info for later use
        if (response.body.data) {
          Cypress.currentUserEmail = response.body.user.email
          Cypress.currentUserName = response.body.user.name
        }

        // Cookies are automatically preserved by Cypress for subsequent requests
        // The session cookie will be set from the response
      })
  },
  {
    validate: () => {
      // Validate session by checking if we can get athlete info
      const apiUrl = Cypress.env('apiUrl') || Cypress.env('CYPRESS_API_BASE_URL')

      getAPI(`${apiUrl}/api/athlete`)
        .its('body')
        .then((body) => {
          expect(body.data.email).to.equal(testEmail)
          Cypress.currentUserEmail = body.data.email
          Cypress.currentUserName = body.data.name
          Cypress.currentUserId = body.data._id
        })
    },
    cacheAcrossSpecs: true,
  })
})

/**
 * Logs in a user using their email and password.
 * @param {string} email - The email of the user to log in.
 * @param {string} password - The password of the user to log in.
 * @param {boolean} restoreSession - Whether to restore the session if it exists.
 */
Cypress.Commands.add('loginUserPass', (email = Cypress.env('CYPRESS_MASTER_USER'), password = Cypress.env('CYPRESS_MASTER_PASSWORD'), restoreSession = true) => {
  const username = email || Cypress.env('CYPRESS_MASTER_USER')
  const sessionName = restoreSession ? `e2e-session-${username}` : `e2e-session-${username}-${generateRandomString(5)}`
  cy.session(sessionName, () => {
    // Clear cookies and local storage in case session restoration does not work like we expect it to.
    cy.clearCookie('session_id')
    cy.window().then((win) => {
      win.localStorage.removeItem('athlete_profile')
      win.localStorage.removeItem('authToken')
      win.localStorage.removeItem('session_id')
    })

    // Login via Auth0.
    cy.visit('/login')
    cy.clickAriaLabel('Log In with Auth0')
    cy.url().should('include', 'https://stridebuilder.com/u/login')

    // Login on Auth0.
    cy.origin(
      'https://stridebuilder.com/u/login',
      { args: { username, password } },
      ({ username, password }) => {
        cy.get('input#username').type(username, { log: false })
        cy.get('input#password').type(password, { log: false })
        cy.contains('button[value=default]', 'Continue').click()
      },
    )
    // Remove session data we don't want to cache
    cy.clearCookie('authId')
    cy.window().then((win) => {
      win.localStorage.removeItem('authToken')
    })

    // Add session data we do want to cache
    cy.getCookie('session_id').then(({ value }) => {
      return cy.setCookie('session_id', value)
    })
  },
  {
    validate: () => {
      // Validate session by checking if we can get athlete info
      const apiUrl = Cypress.env('apiUrl') || Cypress.env('CYPRESS_API_BASE_URL')
      const expectedEmail = email || Cypress.env('CYPRESS_MASTER_USER')

      getAPI(`${apiUrl}/api/athlete`)
        .its('body')
        .then((body) => {
          expect(body.data.email).to.equal(expectedEmail)
          cy.window().then((win) => {
            win.localStorage.setItem('athlete_profile', JSON.stringify(body.data))
          })
          Cypress.currentUserEmail = body.data.email
          Cypress.currentUserName = body.data.name
          Cypress.currentUserId = body.data._id
        })
    },
    cacheAcrossSpecs: true,
  })
})

Cypress.Commands.add('logout', () => {
  logoutAPI().then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.success).to.be.true
    cy.clearCookie('session_id')
    cy.window().then((win) => {
      win.localStorage.removeItem('authToken')
    })
  })
})
