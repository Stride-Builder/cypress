/**
 * Validates the account settings page.
 * @command validateAccountSettingsPage
 * @description Validates the account settings page.
 * @example
 * cy.validateAccountSettingsPage()
 */
Cypress.Commands.add('validateAccountSettingsPage', () => {
  cy.url().should('include', '/account')
  cy.getDataTest('account-avatar-image').should('be.visible')
  cy.getDataTest('account-name-display').should('be.visible')
  cy.getDataTest('account-email-display').should('be.visible')
  cy.getDataTest('account-go-to-profile').should('be.visible')
})

Cypress.Commands.add('updateAccountEmail', (newEmail) => {
  cy.intercept('PUT', '/api/account/email').as('updateAccountEmail')
  cy.clickDataTest('account-email-edit')
  cy.typeDataTest('account-email-input', newEmail, { log: false })
  cy.clickDataTest('account-email-save')
  cy.wait('@updateAccountEmail').then((response) => {
    expect(response.response.statusCode).to.eq(200)
    expect(response.response.body.data.email).to.eq(newEmail)
  })
  cy.getDataTest('account-email-display').should('have.text', newEmail)
  cy.getDataTest('account-email-notice').should('be.visible')
})

Cypress.Commands.add('updateAccountPassword', (currentPassword, newPassword) => {
  cy.intercept('PUT', '/api/account/password').as('updateAccountPassword')
  cy.clickDataTest('account-password-current')
  cy.typeDataTest('account-password-current', currentPassword, { log: false })
  cy.clickDataTest('account-password-new')
  cy.typeDataTest('account-password-new', newPassword, { log: false })
  cy.clickDataTest('account-password-confirm')
  cy.typeDataTest('account-password-confirm', newPassword, { log: false })
  cy.clickDataTest('account-password-save')
  cy.wait('@updateAccountPassword').then((response) => {
    expect(response.response.statusCode).to.eq(200)
  })
  cy.getDataTest('account-password-notice').should('be.visible')
})
