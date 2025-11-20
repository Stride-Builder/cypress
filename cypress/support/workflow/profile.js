/**
 * Validates the profile page.
 * @command validateProfilePage
 * @description Validates the profile page.
 * @example
 * cy.validateProfilePage()
 */
Cypress.Commands.add('validateProfilePage', () => {
  cy.url().should('include', '/profile')
  cy.getDataTest('profile-avatar').should('be.visible')
  cy.getDataTest('nav-account-settings').should('be.visible').should('be.enabled')
  cy.getDataTest('profile-name').should('be.visible')
  cy.getDataTest('profile-email').should('be.visible')
  cy.getDataTest('profile-information').should('be.visible')
  cy.getDataTest('profile-training-preferences').should('be.visible')
  cy.getDataTest('profile-connected-services').should('be.visible')
  cy.getDataTest('profile-technical-information').should('be.visible')
})

/**
 * Changes the athlete's name.
 * @command changeAthleteName
 * @description Changes the athlete's name.
 * @param {string} newName - The new name.
 * @example
 * cy.changeAthleteName('John Doe')
 */
Cypress.Commands.add('changeAthleteName', (newName) => {
  cy.intercept('PUT', '/api/athlete*').as('updateAthlete')
  cy.clickDataTest('edit-name-button')
  cy.typeDataTest('edit-name-input', newName)
  cy.clickDataTest('save-name-button')
  cy.wait('@updateAthlete')
  cy.getDataTest('profile-name').should('have.text', newName)
})

/**
 * Toggles the athlete's privacy settings.
 * @command togglePrivacy
 * @description Toggles the athlete's privacy settings.
 * @param {boolean} validate - Whether to validate the response.
 * @param {boolean} expectedValue - The expected value of the privacy setting.
 * @example
 * cy.togglePrivacy({ validate: true, expectedValue: true })
 * cy.togglePrivacy({ validate: true, expectedValue: false })
 * cy.togglePrivacy({ validate: false, expectedValue: true })
 * cy.togglePrivacy({ validate: false, expectedValue: false })
 */
Cypress.Commands.add('togglePrivacy', (options = { validate: false, expectedValue: true }) => {
  const { validate = false, expectedValue = true } = options
  cy.intercept('PUT', '/api/athlete*').as('updateAthlete')
  cy.clickDataTest('profile-privacy-toggle')
  cy.wait('@updateAthlete').then((response) => {
    expect(response.response.statusCode).to.eq(200)
    if (validate) {
      expect(response.response.body.data.privacy).to.eq(expectedValue)
    }
  })
  if (validate) {
    cy.getDataTest('profile-privacy-toggle').should('have.attr', 'aria-checked', expectedValue.toString())
  }
})

/**
 * Toggles the athlete's coach status.
 * @command toggleCoach
 * @description Toggles the athlete's coach status.
 * @param {boolean} validate - Whether to validate the response.
 * @param {boolean} expectedValue - The expected value of the coach setting.
 * @example
 * cy.toggleCoach({ validate: true, expectedValue: true })
 * cy.toggleCoach({ validate: true, expectedValue: false })
 * cy.toggleCoach({ validate: false, expectedValue: true })
 * cy.toggleCoach({ validate: false, expectedValue: false })
 */
Cypress.Commands.add('toggleCoach', (options = { validate: false, expectedValue: true }) => {
  const { validate = false, expectedValue = true } = options
  cy.intercept('PUT', '/api/athlete*').as('updateAthlete')
  cy.clickDataTest('profile-coach-toggle')
  cy.wait('@updateAthlete').then((response) => {
    expect(response.response.statusCode).to.eq(200)
    if (validate) {
      expect(response.response.body.data.coach).to.eq(expectedValue)
    }
  })
  if (validate) {
    cy.getDataTest('profile-coach-toggle').should('have.attr', 'aria-checked', expectedValue.toString())
  }
})

/**
 * Toggles the athlete's distance unit.
 * @command toggleDistanceUnit
 * @description Toggles the athlete's distance unit.
 * @param {string} unit - The distance unit to toggle.
 * @example
 * cy.toggleDistanceUnit('mi')
 * cy.toggleDistanceUnit('km')
 */
Cypress.Commands.add('toggleDistanceUnit', (unit) => {
  cy.intercept('PUT', '/api/athlete*').as('updateAthlete')
  cy.clickDataTest(`profile-distance-unit-${unit}`)
  cy.wait('@updateAthlete').then((response) => {
    expect(response.response.statusCode).to.eq(200)
    expect(response.response.body.data.preferences.distance_unit).to.eq(unit)
  })
  cy.getDataTest(`profile-distance-unit-${unit}`).should('have.attr', 'checked')
})

/**
 * Validates the athlete's technical information.
 * @command validateTechnicalInformation
 * @description Validates the athlete's technical information.
 * @example
 * cy.validateTechnicalInformation()
 */
Cypress.Commands.add('validateTechnicalInformation', (userJSON) => {
  cy.getDataTest('profile-athlete-id').should('be.visible').should('have.value', userJSON._id)
  cy.getDataTest('profile-status').should('be.visible').should('have.value', userJSON.status)
  cy.getDataTest('profile-account-age').should('be.visible').should('have.attr', 'value')
  cy.getDataTest('profile-last-updated-at').should('be.visible').should('have.attr', 'value')
})
