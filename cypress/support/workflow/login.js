/**
 * Logs in from the public site.
 * @command loginFromPublicSite
 * @description Logs in from the public site.
 * @example
 * cy.loginFromPublicSite()
 */
Cypress.Commands.add('loginFromPublicSite', (email, password) => {
  cy.visit(Cypress.env('PUBLIC_URL'))
  cy.clickDataTest('topNav-login-button')
  cy.origin(
    'https://stridebuilder.com/u/login',
    { args: { email, password } },
    ({ email, password }) => {
      cy.get('input#username').type(email, { log: false })
      cy.get('input#password').type(password, { log: false })
      cy.contains('button[value=default]', 'Continue').click()
    },
  )
  cy.url().should('include', `${Cypress.env('CYPRESS_BASE_URL')}/dashboard`)
  cy.origin(
    Cypress.env('CYPRESS_BASE_URL'),
    () => {
      cy.getCookie('session_id').should('exist')
      cy.window().then((win) => {
        expect(win.localStorage.getItem('athlete_profile')).to.exist
      })
    },
  )
})

Cypress.Commands.add('loginByRedirect', (email, password) => {
  cy.intercept('GET', '**/api/athlete').as('getAthleteProfile')
  cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}`)
  cy.url().should('include', 'login')
  cy.clickAriaLabel('Log In with Auth0')
  cy.url().should('include', 'https://stridebuilder.com/u/login')

  // Login on Auth0.
  cy.origin(
    'https://stridebuilder.com/u/login',
    { args: { email, password } },
    ({ email, password }) => {
      cy.get('input#username').type(email, { log: false })
      cy.get('input#password').type(password, { log: false })
      cy.contains('button[value=default]', 'Continue').click()
    },
  )
  cy.url().should('include', `${Cypress.env('CYPRESS_BASE_URL')}`)
  cy.wait('@getAthleteProfile')
  // Remove session data we don't want to cache
  cy.clearCookie('authId')
  cy.window().then((win) => {
    win.localStorage.removeItem('authToken')
  })

  // Add session data we do want to cache
  cy.getCookie('session_id').then(({ value }) => {
    return cy.setCookie('session_id', value)
  })
})

/**
 * Logs out from the top navigation.
 * @command logoutFromTopNavigation
 * @description Logs out from the top navigation.
 * @example
 * cy.logoutFromTopNavigation()
 */
Cypress.Commands.add('logoutFromTopNavigation', () => {
  cy.clickDataTest('topNav-userMenu')
  cy.clickDataTest('userMenu-logoutButton')
  cy.url().should('include', Cypress.env('PUBLIC_URL'))
})
