import { getAPI, postAPI } from './http'
import { generateRandomString } from './generator'
import { logoutAPI } from '../api/authAPI'

Cypress.Commands.add('login', (email, restoreSession = true) => {
  // Use environment variable with fallback for local dev
  const testEmail = email || Cypress.env('TEST_USER_EMAIL');
  const sessionName = restoreSession ? `session-${testEmail}` : `session-${testEmail}-${generateRandomString(5)}`
  cy.session(sessionName, () => {
    // Authenticate directly via API endpoint
    const apiUrl = Cypress.env('apiUrl') || Cypress.env('CYPRESS_API_BASE_URL')

    const testLoginEndpoint = Cypress.env('TEST_LOGIN_ENDPOINT');

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
  })
})

Cypress.Commands.add('logout', () => {
  logoutAPI().then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.success).to.be.true
  })
})