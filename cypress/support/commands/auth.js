import { getAPI, postAPI } from './http'
import { generateRandomString } from './generator'

Cypress.Commands.add('login', (email, restoreSession = true) => {
  const sessionName = restoreSession ? `session-${email}` : `session-${email}-${generateRandomString(5)}`
  cy.session(sessionName, () => {
    // Authenticate directly via API endpoint
    const apiUrl = Cypress.env('apiUrl') || Cypress.env('CYPRESS_API_BASE_URL')

    postAPI(`${apiUrl}/auth/test/login`, { email })
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
          expect(body.data.email).to.equal(email)
          Cypress.currentUserEmail = body.data.email
          Cypress.currentUserName = body.data.name
          Cypress.currentUserId = body.data._id
        })
    },
  })
})
