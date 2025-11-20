describe('Logout', () => {
  beforeEach(() => {
    cy.loginUserPass()
    cy.visit(Cypress.env('CYPRESS_BASE_URL'))
  })
  it('should be able to logout from the top navigation', () => {
    cy.logoutFromTopNavigation()
    cy.url().should('include', Cypress.env('PUBLIC_URL'))
  })
})
