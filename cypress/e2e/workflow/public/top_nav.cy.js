describe('Top Navigation', () => {
  const baseUrl = Cypress.env('CYPRESS_BASE_URL')

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('should display the top navigation', () => {
    cy.getDataTest('topNav-brandName-home').should('be.visible')
    cy.getDataTest('topNav-about-button').should('be.visible').should('have.text', 'About')
    cy.getDataTest('topNav-login-button').should('be.visible').should('have.text', 'Login')
  })

  it('should not display the dashboard button', () => {
    cy.getDataTest('topNav-dashboard-button').should('not.exist')
  })

  it('should not display the user avatar or the user menu', () => {
    cy.getDataTest('topNav-userMenu-avatar').should('not.exist')
    cy.getDataTest('topNav-userMenu-avatarImage').should('not.exist')
    cy.getDataTest('topNav-userMenu-avatarPlaceholder').should('not.exist')
    cy.getDataTest('topNav-userMenu-panel').should('not.exist')
  })
})
